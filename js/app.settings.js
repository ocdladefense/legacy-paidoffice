(function(window,undefined,jQuery){

	var settings = {
	 checkoutUrl: 'https://ocdla.force.com'
	};
	
	/**
	 * We have three data sources
	 *
	 */
	var config = {
		remoteObjects: {
			type: 'VisualforceRemoteObject',
			params: ["remoteObjects"],
			stores: ['OrderApi__Sales_Order__c']
		},
		localAppData: {
			type: 'jsArrayDataStore',
			params: ["appData"],
			stores: ['contacts','accounts','items','salesOrders']
		},
		force: {
			type: 'VisualforceRemoting',
			params: ["SalesOrderControllerExt"],
			stores: ['getAllContacts','getAllAccounts','getItems','getLineItems']
		},
		localSalesOrderData: {
			type: 'IndexedDb',
			params: ["SalesOrderApp",10],
			stores: ['contacts','accounts','items'],
			schema: [{
				name: "contacts",
				keyPath: "Id",
				indexes: [{
					colName: "FirstName",
					indexName:"FirstName",
					options:{unique:false}
					},
					{colName: "LastName",
						indexName:"LastName",
						options:{unique:false}
					}]
				},
				{
					name: "accounts",
					keyPath: "Id",
					indexes: [{colName: "Name",
						indexName:"Name",
						options:{unique:false}
					}]
				},
				{
					name: "items",
					keyPath: "Id",
					indexes: [{colName: "Name",
						indexName:"Name",
						options:{unique:false}
					}]
				}]
		}
	};
	window.salesOrderAppConfig = config;
	window.salesOrderAppSettings = settings;
})(window,undefined,jQuery);