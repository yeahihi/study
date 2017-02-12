/**
 * Created by Yeji Lee on 2017-02-12.
 */
// 변수 선언
// 이전
//var a = 1;

// ES6
//const b = 2; // const는 한번 선언 하면 변수의 값을 할당을 해줘야 하고 재할당을 할 수 없음.
//let a = 3; // 재할당이 가능.

//const tplList = require('./list.hbs'); // require는 보통 jsp 만 읽음.
import tplList from './list.hbs';
//const tplMain = require('./main.hbs'); // require는 보통 jsp 만 읽음.
import tplMain from './main.hbs';
import tplTable from './table.hbs';
//import ajax from './ajax';
const $ = require('jquery');


$('#root').html(tplMain({}));

const list = [{
    href : 'http://www.naver.com',
    name : 'naver'
},{
    href : 'http://www.daum.net',
    name : 'daum'
}];

$('[data-view="list"]').html(tplList({
    list: list
}));

$(document).ready(function(){
    $.ajax({
        url :  './data.json',
        dataType : 'json',
        success : function(data){
            let tableData = data.fruits;

            $('.tableWrap').html(tplTable({
                table : tableData
            }));
            $('.totalPrice').html(function(){
                let totalPrice = 0;
                for(let i in tableData){
                    totalPrice += tableData[i].price;
                }
                return totalPrice;
            });
        }
    });
});

$('button').click(function () {
    $('.tableWrap').toggleClass('on');
});