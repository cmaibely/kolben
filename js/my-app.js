// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true,
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'eShop',
	dialog: {
		title: 'Kolben',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/contact/',
    	url: 'contact.html',
    	name: 'contact',
  		},
		{
		path: '/toyota/',
    	url: 'toyota.html',
    	name: 'toyota',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},
		{
		path: '/account/',
    	url: 'account.html',
    	name: 'account',
  		},
		{
		path: '/notificaciones/',
    	url: 'notificaciones.html',
    	name: 'notificaciones',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

