var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    X-Client-Id: 3055
    X-Auth-Token: 835fe35618f836cfa22f38a79af4ff8c
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
    });
}

function setupCards(col, cards) {
	cards.forEach(function(card) {
		var cardObj = new Card(card.id, card.name, card.bootcamp_canban_column_id);
		col.createCard(cardObj);
		self.createCard(new Card(prompt("Wpisz nazwę karty")));
	})
}
