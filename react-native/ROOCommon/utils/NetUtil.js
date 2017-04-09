/**
 * create by zhujianlong 2017/3/31
 */

'use strict'
import React, { Component } from 'react';

class NetWork extends Component{
    /**
     * get请求
     * url
     */
    static  get(url) {
        let headers= {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: headers,
            }).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status:response.status})
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err)=> {
                    reject({status:-1});
                })
        })
    }
    /**
     *  post请求 - Json
     *  url
     *  data
     *  callback
     */
    static post(url, data) {
        let headers= {
            'Content-Type':'multipart/form-data'
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body:'',
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((response) => {
                resolve(response);
            }).catch((err)=> {
                reject(err);
            })
        })
    }
}

module.exports = NetWork;