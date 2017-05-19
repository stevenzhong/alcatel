import Mock from 'mockjs';
var Random = Mock.Random;

Random.cparagraph();
Random.datetime();
Random.integer(1,6);
Random.csentence(5, 10);
export default Mock.mock(/\.php/,{
	'notices|20-100':[
		{
			title:'@csentence(5,10)',
			time:'@datetime',
			text:'@cparagraph'
		}
	],
	'products|20-100':[
		{
			'id|+1':1,
			imgurl:'../../static/img/phone.jpg',
			'color|2-6':[
				{colorId:'@integer(1,6)'}
			]
		}
	]
});