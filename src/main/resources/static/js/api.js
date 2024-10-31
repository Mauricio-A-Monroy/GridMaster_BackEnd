api=(function(){
    
    //Gets
    var getPlayer = function(gameCode, playerName) {
        console.log("gameCode: ", gameCode, " playerName: ", playerName);
        return $.ajax({
            url: 'http://localhost:8080/games/' + gameCode + '/player/' + playerName,
            type: 'GET',
            contentType: "application/json"
        }).then(function(response) {
            console.log("Player: ", response);
            return response;
        }).catch(function(error) {
            console.error("Error getting player:", error);
        });
    };

    var getScore = function(gameCode) {
        return $.ajax({
            url: 'http://localhost:8080/games/' + gameCode + '/score',
            type: 'GET',
            contentType: "application/json"
        }).then(function(response) {
            console.log("Scores: ", response);
            return response;
        }).catch(function(error) {
            console.error("Error getting player:", error);
        });
    };
    
    //Post
    var createGame = function(playerName) {
        return $.ajax({
            url: 'http://localhost:8080/games',
            type: 'POST',
            contentType: "application/json"
        }).then(function(gameCode) {
            localStorage.setItem('gameCode', gameCode);
            return gameCode;
        }).catch(function(error) {
            console.error("Error creating game:", error);
        });
    };

    //Puts
    var addPlayer = function(gameCode, playerName) {
        return $.ajax({
            url: 'http://localhost:8080/games/' + gameCode + '/player',
            type: 'PUT',
            data: JSON.stringify({ name: playerName }),
            contentType: "application/json"
        }).then(function(response) {
            console.log("Player added");
            return response;
        }).catch(function(error) {
            console.error("Error adding player:", error);
        });
    };

    var move = function(gameCode, playerName, o1, o2) {
        console.log(gameCode, playerName);
        var json = JSON.stringify({ o1: o1, o2 : o2 })
        console.log(json);
        return $.ajax({
            url: 'http://localhost:8080/games/' + gameCode + '/player/' + playerName,
            type: 'PUT',
            data: json,
            contentType: "application/json"
        }).then(function(response) {
            console.log("Player was move");
        }).catch(function(error) {
            console.error("Error adding player:", error);
        });
    }



    return {
        createGame,
        addPlayer,
        getPlayer,
        getScore,
        move
    };
})();