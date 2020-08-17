/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$gsub', '$last_match', '$nechronica_check', '$==', '$>=', '$<=', '$>', '$+', '$debug', '$=~', '$to_i', '$parren_killer', '$roll', '$<', '$to_s', '$collect', '$split', '$times', '$length', '$[]', '$[]=', '$-', '$join', '$check_suc', '$getHitLocation', '$!=']);
  return (function($base, $super, $parent_nesting) {
    function $Nechronica(){};
    var self = $Nechronica = $klass($base, $super, 'Nechronica', $Nechronica);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Nechronica_initialize_1, TMP_Nechronica_gameName_2, TMP_Nechronica_gameType_3, TMP_Nechronica_getHelpMessage_4, TMP_Nechronica_changeText_9, TMP_Nechronica_dice_command_xRn_10, TMP_Nechronica_check_nD10_11, TMP_Nechronica_nechronica_check_14, TMP_Nechronica_getHitLocation_15;

    def.nick_e = nil;
    
    self.$setPrefixes(["(\\d+NC|\\d+NA)"]);
    
    Opal.defn(self, '$initialize', TMP_Nechronica_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Nechronica_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Nechronica_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Nechronica_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 3;
      return (self.defaultSuccessTarget = "6");
    }, TMP_Nechronica_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Nechronica_gameName_2 = function $$gameName() {
      var self = this;

      return "ネクロニカ"
    }, TMP_Nechronica_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Nechronica_gameType_3 = function $$gameType() {
      var self = this;

      return "Nechronica"
    }, TMP_Nechronica_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Nechronica_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定　(nNC+m)\n" + "　ダイス数n、修正値mで判定ロールを行います。\n" + "　ダイス数が2以上の時のパーツ破損数も表示します。\n" + "・攻撃判定　(nNA+m)\n" + "　ダイス数n、修正値mで攻撃判定ロールを行います。\n" + "　命中部位とダイス数が2以上の時のパーツ破損数も表示します。\n"
    }, TMP_Nechronica_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_Nechronica_changeText_9 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, self = this;

      
      string = $send(string, 'gsub', [/(\d+)NC(10)?([\+\-][\+\-\d]+)/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) + "[0]"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/(\d+)NC(10)?/i], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10[0]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/(\d+)NA(10)?([\+\-][\+\-\d]+)/i], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) + "[1]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/(\d+)NA(10)?/i], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10[1]"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      return string;
    }, TMP_Nechronica_changeText_9.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_Nechronica_dice_command_xRn_10 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      
      self.nick_e = nick_e;
      return self.$nechronica_check(string);
    }, TMP_Nechronica_dice_command_xRn_10.$$arity = 2);
    
    Opal.defn(self, '$check_nD10', TMP_Nechronica_check_nD10_11 = function $$check_nD10(total_n, _dice_n, signOfInequality, diff, dice_cnt, _dice_max, n1, _n_max) {
      var self = this, result = nil;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(total_n, 11))) {
        return " ＞ 大成功"};
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"};
      if ($truthy($rb_le(n1, 0))) {
        return " ＞ 失敗"};
      result = " ＞ 大失敗";
      if ($truthy($rb_gt(dice_cnt, 1))) {
        result = $rb_plus(result, " ＞ 使用パーツ全損")};
      return result;
    }, TMP_Nechronica_check_nD10_11.$$arity = 8);
    
    Opal.defn(self, '$nechronica_check', TMP_Nechronica_nechronica_check_14 = function $$nechronica_check(string) {
      var $a, $b, TMP_12, TMP_13, self = this, output = nil, signOfInequality = nil, dice_n = nil, battleMode = nil, modText = nil, mod = nil, isBattleMode = nil, diff = nil, total_n = nil, _ = nil, dice_str = nil, n1 = nil, cnt_max = nil, n_max = nil, dice = nil, diceMax = nil, hit_loc = nil;

      
      output = "1";
      self.$debug("nechronica_check string", string);
      if ($truthy(/(^|\s)S?((\d+)[rR]10([\+\-\d]+)?(\[(\d+)\])?)(\s|$)/i['$=~'](string))) {
        } else {
        
        self.$debug("nechronica_check unmuched");
        return output;
      };
      string = Opal.const_get_relative($nesting, 'Regexp').$last_match(2);
      signOfInequality = ">=";
      dice_n = 1;
      if ($truthy(Opal.const_get_relative($nesting, 'Regexp').$last_match(3))) {
        dice_n = Opal.const_get_relative($nesting, 'Regexp').$last_match(3).$to_i()};
      battleMode = Opal.const_get_relative($nesting, 'Regexp').$last_match(6).$to_i();
      modText = Opal.const_get_relative($nesting, 'Regexp').$last_match(4);
      mod = self.$parren_killer("" + "(0" + (modText) + ")").$to_i();
      isBattleMode = battleMode['$=='](1);
      self.$debug("nechronica_check string", string);
      self.$debug("isBattleMode", isBattleMode);
      diff = 6;
      total_n = 0;
      $b = self.$roll(dice_n, 10, 1), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), (n1 = ($a[2] == null ? nil : $a[2])), (cnt_max = ($a[3] == null ? nil : $a[3])), (n_max = ($a[4] == null ? nil : $a[4])), $b;
      total_n = $rb_plus(n_max, mod);
      output = "" + (self.nick_e) + ": (" + (string) + ") ＞ [" + (dice_str) + "]";
      if ($truthy($rb_lt(mod, 0))) {
        output = $rb_plus(output, mod.$to_s())
      } else if ($truthy($rb_gt(mod, 0))) {
        output = $rb_plus(output, "" + "+" + (mod))};
      n1 = 0;
      cnt_max = 0;
      dice = $send(dice_str.$split(/,/), 'collect', [], (TMP_12 = function(i){var self = TMP_12.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12));
      $send(dice.$length(), 'times', [], (TMP_13 = function(i){var self = TMP_13.$$s || this, $writer = nil;
if (i == null) i = nil;
      
        
        $writer = [i, $rb_plus(dice['$[]'](i), mod)];
        $send(dice, '[]=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        if ($truthy($rb_le(dice['$[]'](i), 1))) {
          n1 = $rb_plus(n1, 1)};
        if ($truthy($rb_ge(dice['$[]'](i), 10))) {
          return (cnt_max = $rb_plus(cnt_max, 1))
          } else {
          return nil
        };}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13));
      dice_str = dice.$join(",");
      output = $rb_plus(output, "" + "  ＞ " + (total_n) + "[" + (dice_str) + "]");
      diceMax = 10;
      output = $rb_plus(output, self.$check_suc(total_n, n_max, signOfInequality, diff, dice_n, diceMax, n1, n_max));
      self.$debug("dice_n, n1, total_n diff", dice_n, n1, total_n, diff);
      if ($truthy(isBattleMode)) {
        
        hit_loc = self.$getHitLocation(total_n);
        if ($truthy(hit_loc['$!=']("1"))) {
          output = $rb_plus(output, "" + " ＞ " + (hit_loc))};};
      return output;
    }, TMP_Nechronica_nechronica_check_14.$$arity = 1);
    return (Opal.defn(self, '$getHitLocation', TMP_Nechronica_getHitLocation_15 = function $$getHitLocation(dice) {
      var self = this, output = nil, table = nil, index = nil, addDamage = nil;

      
      output = "1";
      self.$debug("getHitLocation dice", dice);
      if ($truthy($rb_le(dice, 5))) {
        return output};
      output = "";
      table = ["防御側任意", "脚（なければ攻撃側任意）", "胴（なければ攻撃側任意）", "腕（なければ攻撃側任意）", "頭（なければ攻撃側任意）", "攻撃側任意"];
      index = $rb_minus(dice, 6);
      addDamage = "";
      if ($truthy($rb_gt(dice, 10))) {
        
        index = 5;
        addDamage = "" + "(追加ダメージ" + ($rb_minus(dice, 10)) + ")";};
      output = $rb_plus(table['$[]'](index), addDamage);
      return output;
    }, TMP_Nechronica_getHitLocation_15.$$arity = 1), nil) && 'getHitLocation';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
