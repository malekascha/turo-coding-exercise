function createDatabase(){
  var db = {};

  var transactions = 0;

  var get = function(key){
    return db[key] || 'NULL';
  };

  var set = function(key, val){
    db[key] = val;
  };

  var unset = function(key){
    db[key] = undefined;
  };

  var count = function(val){
    var num = 0;
    for(var key in db){
      if(db[key] === val){
        num++;
      }
    }
    return num;
  };

  var createTransaction = function(){
    var transaction = Object.create(db);
    db = transaction;
    transactions++;
  };

  var commit = function(){
    if(transactions === 0){
      return 'NO TRANSACTION';
    } else {
      for(var key in db){
        db.__proto__[key] = db[key];
      }
      db = db.__proto__;
      transactions--;
    }
  };

  var rollback = function(){
    if(transactions === 0){
      return 'NO TRANSACTION';
    } else {
      db = db.__proto__;
      transactions--;
    }
  };

  return {
    get: get,
    set: set,
    unset: unset,
    count: count,
    createTransaction: createTransaction,
    commit: commit,
    rollback: rollback
  };
};

module.exports = createDatabase;