/**
 * Created by Yeji Lee on 2017-02-06.
 */
$.ajax('../../../../data.json',function (data) {
    createTable(data);
});
function createTable(data){
    return '<table>'+data.map(function(fruit){
            var rows = ['<tr>'];
            for(var key in fruit){
                if(fruit.hasOwnProperty(key)){
                    rows.push('<td>'+fruit[key]+'</td>');
                }
            }
            rows.push('</tr>');
            return rows.join('');
        }).join('')+'</table>';
}
