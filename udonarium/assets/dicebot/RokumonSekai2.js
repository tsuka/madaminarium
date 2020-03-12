/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$debug', '$gsub', '$last_match', '$checkRoll', '$=~', '$to_i', '$parren_killer', '$rokumon2_roll', '$rokumon2_suc_rank', '$!=', '$+', '$roll', '$abs', '$collect', '$split', '$times', '$<', '$shift', '$pop', '$each', '$>=', '$<=', '$==', '$[]']);
  return (function($base, $super, $parent_nesting) {
    function $RokumonSekai2(){};
    var self = $RokumonSekai2 = $klass($base, $super, 'RokumonSekai2', $RokumonSekai2);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_RokumonSekai2_initialize_1, TMP_RokumonSekai2_gameName_2, TMP_RokumonSekai2_gameType_3, TMP_RokumonSekai2_getHelpMessage_4, TMP_RokumonSekai2_changeText_7, TMP_RokumonSekai2_dice_command_xRn_8, TMP_RokumonSekai2_checkRoll_9, TMP_RokumonSekai2_rokumon2_roll_13, TMP_RokumonSekai2_rokumon2_suc_rank_14;

    
    self.$setPrefixes(["\\d+RS"]);
    
    Opal.defn(self, '$initialize', TMP_RokumonSekai2_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_RokumonSekai2_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_RokumonSekai2_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_RokumonSekai2_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.sortType = 1);
    }, TMP_RokumonSekai2_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_RokumonSekai2_gameName_2 = function $$gameName() {
      var self = this;

      return "六門世界2nd"
    }, TMP_RokumonSekai2_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_RokumonSekai2_gameType_3 = function $$gameType() {
      var self = this;

      return "RokumonSekai2"
    }, TMP_RokumonSekai2_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_RokumonSekai2_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定\n" + "aRSm<=t\n" + "能力値a,修正値m,目標値tで判定ロールを行います。\n" + "Rコマンド(3R6m<=t[a])に読み替えます。\n" + "成功度、評価、ボーナスダイスを自動表示します。\n" + "　例) 3RS+1<=9　3R6+1<=9[3]\n"
    }, TMP_RokumonSekai2_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_RokumonSekai2_changeText_7 = function $$changeText(string) {
      var TMP_5, TMP_6, self = this;

      
      self.$debug("parren_killer_add begin stirng", string);
      string = $send(string, 'gsub', [/(\d+)RS([\+\-][\+\-\d]+)<=(\d+)/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + "3R6" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "<=" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) + "[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/(\d+)RS<=(\d+)/i], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + "3R6<=" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      self.$debug("parren_killer_add end stirng", string);
      return string;
    }, TMP_RokumonSekai2_changeText_7.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_RokumonSekai2_dice_command_xRn_8 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$checkRoll(string, nick_e)
    }, TMP_RokumonSekai2_dice_command_xRn_8.$$arity = 2);
    
    Opal.defn(self, '$checkRoll', TMP_RokumonSekai2_checkRoll_9 = function $$checkRoll(string, nick_e) {
      var $a, $b, self = this, output = nil, modText = nil, target = nil, abl = nil, mod = nil, dstr = nil, suc = nil, sum = nil;

      
      output = "1";
      if ($truthy(/3R6([\+\-\d]*)<=(\d+)\[(\d+)\]/i['$=~'](string))) {
        } else {
        return output
      };
      modText = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      target = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
      abl = Opal.const_get_relative($nesting, 'Regexp').$last_match(3).$to_i();
      mod = 0;
      if ($truthy(modText)) {
        mod = self.$parren_killer("" + "(0" + (modText) + ")").$to_i()};
      $b = self.$rokumon2_roll(mod, target, abl), $a = Opal.to_ary($b), (dstr = ($a[0] == null ? nil : $a[0])), (suc = ($a[1] == null ? nil : $a[1])), (sum = ($a[2] == null ? nil : $a[2])), $b;
      output = "" + (sum) + "[" + (dstr) + "] ＞ " + (suc) + " ＞ 評価" + (self.$rokumon2_suc_rank(suc));
      if ($truthy(suc['$!='](0))) {
        output = $rb_plus(output, "" + "(+" + (suc) + "d6)")};
      output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (output);
      return output;
    }, TMP_RokumonSekai2_checkRoll_9.$$arity = 2);
    
    Opal.defn(self, '$rokumon2_roll', TMP_RokumonSekai2_rokumon2_roll_13 = function $$rokumon2_roll(mod, target, abl) {
      var $a, $b, TMP_10, TMP_11, TMP_12, self = this, suc = nil, _ = nil, dicestr = nil, dice = nil, cnt5 = nil, cnt2 = nil, sum = nil;

      
      suc = 0;
      $b = self.$roll($rb_plus(3, mod.$abs()), 6, 1), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dicestr = ($a[1] == null ? nil : $a[1])), $b;
      dice = $send(dicestr.$split(/,/), 'collect', [], (TMP_10 = function(i){var self = TMP_10.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10));
      $send(mod.$abs(), 'times', [], (TMP_11 = function(_i){var self = TMP_11.$$s || this;
if (_i == null) _i = nil;
      if ($truthy($rb_lt(mod, 0))) {
          return dice.$shift()
          } else {
          return dice.$pop()
        }}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11));
      cnt5 = 0;
      cnt2 = 0;
      sum = 0;
      $send(dice, 'each', [], (TMP_12 = function(die1){var self = TMP_12.$$s || this;
if (die1 == null) die1 = nil;
      
        if ($truthy($rb_ge(die1, 5))) {
          cnt5 = $rb_plus(cnt5, 1)};
        if ($truthy($rb_le(die1, 2))) {
          cnt2 = $rb_plus(cnt2, 1)};
        if ($truthy($rb_le(die1, abl))) {
          suc = $rb_plus(suc, 1)};
        return (sum = $rb_plus(sum, die1));}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12));
      if ($truthy($rb_lt(sum, target))) {
        suc = $rb_plus(suc, 2)
      } else if (sum['$=='](target)) {
        suc = $rb_plus(suc, 1)};
      if ($truthy($rb_ge(cnt5, 3))) {
        suc = 0};
      if ($truthy($rb_ge(cnt2, 3))) {
        suc = 5};
      return [dicestr, suc, sum];
    }, TMP_RokumonSekai2_rokumon2_roll_13.$$arity = 3);
    return (Opal.defn(self, '$rokumon2_suc_rank', TMP_RokumonSekai2_rokumon2_suc_rank_14 = function $$rokumon2_suc_rank(suc) {
      var self = this, suc_rank = nil;

      
      suc_rank = ["E", "D", "C", "B", "A", "S"];
      return suc_rank['$[]'](suc);
    }, TMP_RokumonSekai2_rokumon2_suc_rank_14.$$arity = 1), nil) && 'rokumon2_suc_rank';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);