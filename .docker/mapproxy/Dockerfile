FROM debian:jessie

RUN set -ex \
	&& apt-get update \
	&& apt-get install -y python-mapnik python-pip

RUN set -ex \
	&& apt-get install -y libjpeg-dev python-dev zlib1g-dev \
	&& pip install gunicorn mapproxy

WORKDIR /mapproxy

ADD mapproxy.yaml .

CMD mapproxy-util serve-develop ./mapproxy.yaml -b 0.0.0.0:80
