sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"incident/test/integration/pages/IncidentsList",
	"incident/test/integration/pages/IncidentsObjectPage",
	"incident/test/integration/pages/ConversationsObjectPage"
], function (JourneyRunner, IncidentsList, IncidentsObjectPage, ConversationsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('incident') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsList: IncidentsList,
			onTheIncidentsObjectPage: IncidentsObjectPage,
			onTheConversationsObjectPage: ConversationsObjectPage
        },
        async: true
    });

    return runner;
});

