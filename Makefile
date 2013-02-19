#!/bin/bash

OUT=tmp
ZIP=$(OUT)/hdo-crx.zip

zip: tmp
		jar cf $(ZIP) *.{js,html,json,png}

clean:
		rm -rf $(OUT)

tmp:
		mkdir -p $(OUT)

