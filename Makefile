app-container-up:
	docker run --name APP_MULTIPLICA -p 4200:80 -d fabribraguev/app-multiplica

app-image-up:
	docker build -t fabribraguev/app-multiplica  .

app-init:
	make app-image-up
	make app-container-up

app-start:
	docker start APP_MULTIPLICA

app-stop:
	docker stop APP_MULTIPLICA

app-rm-container:
	docker rm APP_MULTIPLICA

app-stop-rm:
	make app-stop
	make app-rm-container

app-rm-image:
	docker rmi fabribraguev/app-multiplica

app-reset:
	make app-stop-rm
	make app-rm-image

app-uninstall:
	make app-stop-rm
	make app-rm-image

app-init-test:
	docker build -t fabribraguev/app-multiplica-test -f Dockerfile.test .
	docker run --name APP_MULTIPLICA_TEST -p 9876:9876 -d fabribraguev/app-multiplica-test 

app-run-test:
	docker run --name APP_MULTIPLICA_TEST -p 9876:9876 -d fabribraguev/app-multiplica-test

app-rm-test:
	docker stop APP_MULTIPLICA_TEST
	docker rm APP_MULTIPLICA_TEST
	docker rmi fabribraguev/app-multiplica-test

app-reset-test:
	make app-rm-test
	make app-init-test



	
