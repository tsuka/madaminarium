/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send;

  return (function($base, $super, $parent_nesting) {
    function $DungeonsAndDoragons(){};
    var self = $DungeonsAndDoragons = $klass($base, $super, 'DungeonsAndDoragons', $DungeonsAndDoragons);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_DungeonsAndDoragons_initialize_1, TMP_DungeonsAndDoragons_gameName_2, TMP_DungeonsAndDoragons_gameType_3, TMP_DungeonsAndDoragons_getHelpMessage_4;

    
    
    Opal.defn(self, '$initialize', TMP_DungeonsAndDoragons_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_DungeonsAndDoragons_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_DungeonsAndDoragons_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_DungeonsAndDoragons_initialize_1, false), $zuper, $iter)
    }, TMP_DungeonsAndDoragons_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_DungeonsAndDoragons_gameName_2 = function $$gameName() {
      var self = this;

      return "ダンジョンズ＆ドラゴンズ"
    }, TMP_DungeonsAndDoragons_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_DungeonsAndDoragons_gameType_3 = function $$gameType() {
      var self = this;

      return "DungeonsAndDoragons"
    }, TMP_DungeonsAndDoragons_gameType_3.$$arity = 0);
    return (Opal.defn(self, '$getHelpMessage', TMP_DungeonsAndDoragons_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "※このダイスボットは部屋のシステム名表示用となります。\n"
    }, TMP_DungeonsAndDoragons_getHelpMessage_4.$$arity = 0), nil) && 'getHelpMessage';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
