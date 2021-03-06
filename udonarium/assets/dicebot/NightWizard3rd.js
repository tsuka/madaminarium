/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$=~', '$gsub', '$empty?', '$last_match', '$checkRoll', '$==', '$>=', '$debug', '$to_i', '$marshalSignOfInequality', '$split', '$parren_killer', '$nw_dice', '$!=', '$+', '$check_suc', '$<', '$to_s', '$getValuesFromText', '$roll', '$include?', '$getFumbleTextAndTotal', '$checkCritical', '$collect', '$getCriticalValue']);
  return (function($base, $super, $parent_nesting) {
    function $NightWizard(){};
    var self = $NightWizard = $klass($base, $super, 'NightWizard', $NightWizard);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_NightWizard_initialize_1, TMP_NightWizard_gameName_2, TMP_NightWizard_gameType_3, TMP_NightWizard_getHelpMessage_4, TMP_NightWizard_changeText_8, TMP_NightWizard_dice_command_xRn_9, TMP_NightWizard_check_2D6_10, TMP_NightWizard_checkRoll_11, TMP_NightWizard_getValueText_12, TMP_NightWizard_nw_dice_13, TMP_NightWizard_getFumbleTextAndTotal_14, TMP_NightWizard_setCriticalValues_15, TMP_NightWizard_getValuesFromText_17, TMP_NightWizard_checkCritical_18, TMP_NightWizard_getCriticalValue_19;

    def.criticalValues = def.fumbleValues = nil;
    
    self.$setPrefixes(["\\d+NW"]);
    
    Opal.defn(self, '$initialize', TMP_NightWizard_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_NightWizard_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_NightWizard_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_NightWizard_initialize_1, false), $zuper, $iter);
      return (self.sendMode = 2);
    }, TMP_NightWizard_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_NightWizard_gameName_2 = function $$gameName() {
      var self = this;

      return "ナイトウィザード2版"
    }, TMP_NightWizard_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_NightWizard_gameType_3 = function $$gameType() {
      var self = this;

      return "NightWizard"
    }, TMP_NightWizard_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_NightWizard_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定用コマンド　(nNW+m@x#y)\n" + "　\"(基本値)NW(常時および常時に準じる特技等及び状態異常（省略可）)@(クリティカル値)#(ファンブル値)（常時以外の特技等及び味方の支援効果等の影響（省略可））\"でロールします。\n" + "　Rコマンド(2R6m[n,m]c[x]f[y]>=t tは目標値)に読替されます。\n" + "　クリティカル値、ファンブル値が無い場合は1や13などのあり得ない数値を入れてください。\n" + "　例）12NW-5@7#2　　1NW　　50nw+5@7,10#2,5　50nw-5+10@7,10#2,5+15+25\n"
    }, TMP_NightWizard_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_NightWizard_changeText_8 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, self = this;

      
      if ($truthy(string['$=~'](/NW/i))) {
        } else {
        return string
      };
      string = $send(string, 'gsub', [/([\-\d]+)NW([\+\-\d]*)@([,\d]+)#([,\d]+)([\+\-\d]*)/i], (TMP_5 = function(){var self = TMP_5.$$s || this, modify = nil;

      
        modify = (function() {if ($truthy(Opal.const_get_relative($nesting, 'Regexp').$last_match(5)['$empty?']())) {
          return ""
          } else {
          return "" + "," + (Opal.const_get_relative($nesting, 'Regexp').$last_match(5))
        }; return nil; })();
        return "" + "2R6m[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + (modify) + "]c[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) + "]f[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) + "]";}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/([\-\d]+)NW([\+\-\d]*)/i], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + "2R6m[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      return (string = $send(string, 'gsub', [/NW([\+\-\d]*)/i], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return "" + "2R6m[0" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7)));
    }, TMP_NightWizard_changeText_8.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_NightWizard_dice_command_xRn_9 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$checkRoll(string, nick_e)
    }, TMP_NightWizard_dice_command_xRn_9.$$arity = 2);
    
    Opal.defn(self, '$check_2D6', TMP_NightWizard_check_2D6_10 = function $$check_2D6(total_n, _dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_NightWizard_check_2D6_10.$$arity = 8);
    
    Opal.defn(self, '$checkRoll', TMP_NightWizard_checkRoll_11 = function $$checkRoll(string, nick_e) {
      var $a, $b, self = this, output = nil, num = nil, base_and_modify = nil, criticalText = nil, criticalValue = nil, fumbleText = nil, fumbleValue = nil, judgeText = nil, judgeOperator = nil, judgeValue = nil, crit = nil, fumble = nil, signOfInequality = nil, diff = nil, base = nil, modify = nil, total = nil, out_str = nil;

      
      self.$debug("checkRoll string", string);
      output = "1";
      num = "[,\\d\\+\\-]+";
      if ($truthy(new RegExp("" + "(^|\\s)S?(2R6m\\[(" + (num) + ")\\](c\\[(" + (num) + ")\\])?(f\\[(" + (num) + ")\\])?(([>=]+)(\\d+))?)(\\s|$)", 'i')['$=~'](string))) {
        } else {
        return output
      };
      self.$debug("is valid string");
      string = Opal.const_get_relative($nesting, 'Regexp').$last_match(2);
      base_and_modify = Opal.const_get_relative($nesting, 'Regexp').$last_match(3);
      criticalText = Opal.const_get_relative($nesting, 'Regexp').$last_match(4);
      criticalValue = Opal.const_get_relative($nesting, 'Regexp').$last_match(5);
      fumbleText = Opal.const_get_relative($nesting, 'Regexp').$last_match(6);
      fumbleValue = Opal.const_get_relative($nesting, 'Regexp').$last_match(7);
      judgeText = Opal.const_get_relative($nesting, 'Regexp').$last_match(8);
      judgeOperator = Opal.const_get_relative($nesting, 'Regexp').$last_match(9);
      judgeValue = Opal.const_get_relative($nesting, 'Regexp').$last_match(10).$to_i();
      crit = "0";
      fumble = "0";
      signOfInequality = "";
      diff = 0;
      if ($truthy(criticalText)) {
        crit = criticalValue};
      if ($truthy(fumbleText)) {
        fumble = fumbleValue};
      if ($truthy(judgeText)) {
        
        diff = judgeValue;
        self.$debug("judgeOperator", judgeOperator);
        signOfInequality = self.$marshalSignOfInequality(judgeOperator);};
      $b = base_and_modify.$split(/,/), $a = Opal.to_ary($b), (base = ($a[0] == null ? nil : $a[0])), (modify = ($a[1] == null ? nil : $a[1])), $b;
      base = self.$parren_killer("" + "(0" + (base) + ")").$to_i();
      modify = self.$parren_killer("" + "(0" + (modify) + ")").$to_i();
      self.$debug("base_and_modify, base, modify", base_and_modify, base, modify);
      $b = self.$nw_dice(base, modify, crit, fumble), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (out_str = ($a[1] == null ? nil : $a[1])), $b;
      output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (out_str);
      if ($truthy(signOfInequality['$!='](""))) {
        output = $rb_plus(output, self.$check_suc(total, 0, signOfInequality, diff, 3, 6, 0, 0))};
      return output;
    }, TMP_NightWizard_checkRoll_11.$$arity = 2);
    
    Opal.defn(self, '$getValueText', TMP_NightWizard_getValueText_12 = function $$getValueText(text) {
      var self = this, value = nil;

      
      value = text.$to_i();
      if ($truthy($rb_lt(value, 0))) {
        return value.$to_s()};
      return "" + "+" + (value);
    }, TMP_NightWizard_getValueText_12.$$arity = 1);
    
    Opal.defn(self, '$nw_dice', TMP_NightWizard_nw_dice_13 = function $$nw_dice(base, modify, criticalText, fumbleText) {
      var $a, $b, self = this, total = nil, output = nil, dice_n = nil, dice_str = nil, fumble_text = nil;

      
      self.$debug("nw_dice : base, modify, criticalText, fumbleText", base, modify, criticalText, fumbleText);
      self.criticalValues = self.$getValuesFromText(criticalText, [10]);
      self.fumbleValues = self.$getValuesFromText(fumbleText, [5]);
      total = 0;
      output = "";
      self.$debug("@criticalValues", self.criticalValues);
      self.$debug("@fumbleValues", self.fumbleValues);
      $b = self.$roll(2, 6, 0), $a = Opal.to_ary($b), (dice_n = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      total = 0;
      if ($truthy(self.fumbleValues['$include?'](dice_n))) {
        
        $b = self.$getFumbleTextAndTotal(base, modify, dice_str), $a = Opal.to_ary($b), (fumble_text = ($a[0] == null ? nil : $a[0])), (total = ($a[1] == null ? nil : $a[1])), $b;
        output = "" + (fumble_text) + " ＞ ファンブル ＞ " + (total);
        } else {
        
        total = $rb_plus(base, modify);
        $b = self.$checkCritical(total, dice_str, dice_n), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (output = ($a[1] == null ? nil : $a[1])), $b;
      };
      return [total, output];
    }, TMP_NightWizard_nw_dice_13.$$arity = 4);
    
    Opal.defn(self, '$getFumbleTextAndTotal', TMP_NightWizard_getFumbleTextAndTotal_14 = function $$getFumbleTextAndTotal(base, _modify, dice_str) {
      var self = this, total = nil, text = nil;

      
      total = base;
      total = $rb_plus(total, -10);
      text = "" + (base) + "-10[" + (dice_str) + "]";
      return [text, total];
    }, TMP_NightWizard_getFumbleTextAndTotal_14.$$arity = 3);
    
    Opal.defn(self, '$setCriticalValues', TMP_NightWizard_setCriticalValues_15 = function $$setCriticalValues(text) {
      var self = this;

      return (self.criticalValues = self.$getValuesFromText(text, [10]))
    }, TMP_NightWizard_setCriticalValues_15.$$arity = 1);
    
    Opal.defn(self, '$getValuesFromText', TMP_NightWizard_getValuesFromText_17 = function $$getValuesFromText(text, default$) {
      var TMP_16, self = this;

      
      if (text['$==']("0")) {
        return default$};
      return $send(text.$split(/,/), 'collect', [], (TMP_16 = function(i){var self = TMP_16.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_16.$$s = self, TMP_16.$$arity = 1, TMP_16));
    }, TMP_NightWizard_getValuesFromText_17.$$arity = 2);
    
    Opal.defn(self, '$checkCritical', TMP_NightWizard_checkCritical_18 = function $$checkCritical(total, dice_str, dice_n) {
      var $a, $b, $c, self = this, output = nil, criticalText = nil, criticalValue = nil;

      
      self.$debug("addRollWhenCritical begin total, dice_str", total, dice_str);
      output = total.$to_s();
      criticalText = "";
      criticalValue = self.$getCriticalValue(dice_n);
      while ($truthy(criticalValue)) {
        
        total = $rb_plus(total, 10);
        output = $rb_plus(output, "" + "+10[" + (dice_str) + "]");
        criticalText = "＞ クリティカル ";
        $c = self.$roll(2, 6, 0), $b = Opal.to_ary($c), (dice_n = ($b[0] == null ? nil : $b[0])), (dice_str = ($b[1] == null ? nil : $b[1])), $c;
        criticalValue = self.$getCriticalValue(dice_n);
        self.$debug("criticalValue", criticalValue);
      };
      total = $rb_plus(total, dice_n);
      output = $rb_plus(output, "" + "+" + (dice_n) + "[" + (dice_str) + "] " + (criticalText) + "＞ " + (total));
      return [total, output];
    }, TMP_NightWizard_checkCritical_18.$$arity = 3);
    return (Opal.defn(self, '$getCriticalValue', TMP_NightWizard_getCriticalValue_19 = function $$getCriticalValue(dice_n) {
      var self = this;

      return self.criticalValues['$include?'](dice_n)
    }, TMP_NightWizard_getCriticalValue_19.$$arity = 1), nil) && 'getCriticalValue';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
Opal.loaded(["diceBot/NightWizard"]);
/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send;

  Opal.add_stubs(['$require', '$+']);
  
  self.$require("diceBot/NightWizard");
  return (function($base, $super, $parent_nesting) {
    function $NightWizard3rd(){};
    var self = $NightWizard3rd = $klass($base, $super, 'NightWizard3rd', $NightWizard3rd);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_NightWizard3rd_initialize_1, TMP_NightWizard3rd_gameName_2, TMP_NightWizard3rd_gameType_3, TMP_NightWizard3rd_getFumbleTextAndTotal_4;

    
    
    Opal.defn(self, '$initialize', TMP_NightWizard3rd_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_NightWizard3rd_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_NightWizard3rd_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_NightWizard3rd_initialize_1, false), $zuper, $iter)
    }, TMP_NightWizard3rd_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_NightWizard3rd_gameName_2 = function $$gameName() {
      var self = this;

      return "ナイトウィザード3版"
    }, TMP_NightWizard3rd_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_NightWizard3rd_gameType_3 = function $$gameType() {
      var self = this;

      return "NightWizard3rd"
    }, TMP_NightWizard3rd_gameType_3.$$arity = 0);
    return (Opal.defn(self, '$getFumbleTextAndTotal', TMP_NightWizard3rd_getFumbleTextAndTotal_4 = function $$getFumbleTextAndTotal(base, modify, dice_str) {
      var self = this, total = nil, text = nil;

      
      total = $rb_plus(base, modify);
      total = $rb_plus(total, -10);
      text = "" + ($rb_plus(base, modify)) + "-10[" + (dice_str) + "]";
      return [text, total];
    }, TMP_NightWizard3rd_getFumbleTextAndTotal_4.$$arity = 3), nil) && 'getFumbleTextAndTotal';
  })($nesting[0], Opal.const_get_relative($nesting, 'NightWizard'), $nesting);
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
