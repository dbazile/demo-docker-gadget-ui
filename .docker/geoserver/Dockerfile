FROM openjdk

ENV GEOSERVER_VERSION '2.11.2'
ENV GEOSERVER_HOME '/geoserver'

WORKDIR /tmp
RUN curl -Lo geoserver.zip https://sourceforge.net/projects/geoserver/files/GeoServer/$GEOSERVER_VERSION/geoserver-$GEOSERVER_VERSION-bin.zip
RUN unzip geoserver.zip \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/coverages/**" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/data/*" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/demo/*" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/layergroups/**" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/styles/**" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/workspaces/**" \
		-x "geoserver-$GEOSERVER_VERSION/data_dir/README.rst" \
		-x "geoserver-$GEOSERVER_VERSION/*.txt" \
		\
		-i "geoserver-$GEOSERVER_VERSION/data_dir/styles/default_*" \
	&& \
	mv geoserver-$GEOSERVER_VERSION $GEOSERVER_HOME
RUN rm geoserver.zip

WORKDIR $GEOSERVER_HOME

ENV PATH "$GEOSERVER_HOME/bin:$PATH"

RUN set -ex \
	&& sed -i 's/jetty\.port=[[:digit:]]*/jetty.port=80/' start.ini

CMD startup.sh
