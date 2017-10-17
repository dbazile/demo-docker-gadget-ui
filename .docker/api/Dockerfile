FROM python:3

RUN set -ex \
	&& pip install flask

WORKDIR /api

ADD server.py .

CMD python3 server.py
