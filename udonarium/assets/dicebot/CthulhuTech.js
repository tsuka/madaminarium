/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$check_nD10_nomalTest', '$check_nD10_combatTest', '$>=', '$to_i', '$+', '$floor', '$/', '$>', '$===', '$getDamageDice', '$debug', '$ceil', '$-', '$cthulhutech_check', '$collect', '$split', '$each', '$[]', '$[]=', '$length', '$times', '$*', '$nil?', '$step']);
  return (function($base, $super, $parent_nesting) {
    function $CthulhuTech(){};
    var self = $CthulhuTech = $klass($base, $super, 'CthulhuTech', $CthulhuTech);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_CthulhuTech_initialize_1, TMP_CthulhuTech_gameName_2, TMP_CthulhuTech_gameType_3, TMP_CthulhuTech_getHelpMessage_4, TMP_CthulhuTech_check_nD10_5, TMP_CthulhuTech_check_nD10_nomalTest_6, TMP_CthulhuTech_check_nD10_combatTest_7, TMP_CthulhuTech_getDamageDice_8, TMP_CthulhuTech_changeDiceValueByDiceText_9, TMP_CthulhuTech_cthulhutech_check_15;

    def.isCombatTest = nil;
    
    
    Opal.defn(self, '$initialize', TMP_CthulhuTech_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_CthulhuTech_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_CthulhuTech_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_CthulhuTech_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.sortType = 1);
    }, TMP_CthulhuTech_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_CthulhuTech_gameName_2 = function $$gameName() {
      var self = this;

      return "クトゥルフテック"
    }, TMP_CthulhuTech_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_CthulhuTech_gameType_3 = function $$gameType() {
      var self = this;

      return "CthulhuTech"
    }, TMP_CthulhuTech_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_CthulhuTech_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "テストのダイス計算を実装。\n" + "成功、失敗、クリティカル、ファンブルの自動判定。\n" + "コンバットテスト(防御側有利なので「>=」ではなく「>」で入力)の時はダメージダイスも表示。\n"
    }, TMP_CthulhuTech_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$check_nD10', TMP_CthulhuTech_check_nD10_5 = function $$check_nD10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        
        self.isCombatTest = false;
        return self.$check_nD10_nomalTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);};
      if (signOfInequality['$=='](">")) {
        
        self.isCombatTest = true;
        return self.$check_nD10_combatTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);
        } else {
        return nil
      };
    }, TMP_CthulhuTech_check_nD10_5.$$arity = 8);
    
    Opal.defn(self, '$check_nD10_nomalTest', TMP_CthulhuTech_check_nD10_nomalTest_6 = function $$check_nD10_nomalTest(total_n, _dice_n, _signOfInequality, diff, dice_cnt, _dice_max, n1, _n_max) {
      var self = this, isSuccess = nil;

      
      if ($truthy($rb_ge(n1, $rb_plus($rb_divide(dice_cnt, 2).$floor(), 0.9).$to_i()))) {
        return " ＞ ファンブル"};
      isSuccess = false;
      if ($truthy(self.isCombatTest)) {
        isSuccess = $rb_gt(total_n, diff)
        } else {
        isSuccess = $rb_ge(total_n, diff)
      };
      if ($truthy(isSuccess)) {
        } else {
        return " ＞ 失敗"
      };
      if ($truthy($rb_ge(total_n, $rb_plus(diff, 10)))) {
        return " ＞ クリティカル"};
      return " ＞ 成功";
    }, TMP_CthulhuTech_check_nD10_nomalTest_6.$$arity = 8);
    
    Opal.defn(self, '$check_nD10_combatTest', TMP_CthulhuTech_check_nD10_combatTest_7 = function $$check_nD10_combatTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, result = nil, $case = nil;

      
      result = self.$check_nD10_nomalTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);
      $case = result;
      if (" ＞ クリティカル"['$===']($case) || " ＞ 成功"['$===']($case)) {result = $rb_plus(result, self.$getDamageDice(total_n, diff))};
      return result;
    }, TMP_CthulhuTech_check_nD10_combatTest_7.$$arity = 8);
    
    Opal.defn(self, '$getDamageDice', TMP_CthulhuTech_getDamageDice_8 = function $$getDamageDice(total_n, diff) {
      var self = this, damageDiceCount = nil, damageDice = nil;

      
      self.$debug("getDamageDice total_n, diff", total_n, diff);
      damageDiceCount = $rb_divide($rb_minus(total_n, diff), 5.0).$ceil();
      self.$debug("damageDiceCount", damageDiceCount);
      damageDice = "" + "(" + (damageDiceCount) + "d10)";
      return damageDice;
    }, TMP_CthulhuTech_getDamageDice_8.$$arity = 2);
    
    Opal.defn(self, '$changeDiceValueByDiceText', TMP_CthulhuTech_changeDiceValueByDiceText_9 = function $$changeDiceValueByDiceText(dice_now, dice_str, isCheckSuccess, dice_max) {
      var $a, self = this;

      
      self.$debug("changeDiceValueByDiceText dice_now, dice_str, isCheckSuccess, dice_max", dice_now, dice_str, isCheckSuccess, dice_max);
      if ($truthy(($truthy($a = isCheckSuccess) ? dice_max['$=='](10) : $a))) {
        
        self.$debug("cthulhutech_check(dice_str) called");
        self.$debug("dice_str, dice_now", dice_str, dice_now);
        dice_now = self.$cthulhutech_check(dice_str);};
      self.$debug("dice_str, dice_now", dice_str, dice_now);
      return dice_now;
    }, TMP_CthulhuTech_changeDiceValueByDiceText_9.$$arity = 4);
    return (Opal.defn(self, '$cthulhutech_check', TMP_CthulhuTech_cthulhutech_check_15 = function $$cthulhutech_check(dice_str) {
      var TMP_10, TMP_11, TMP_12, TMP_13, self = this, dice_aRR = nil, dice_num = nil, max_num = nil;

      
      dice_aRR = $send(dice_str.$split(/,/), 'collect', [], (TMP_10 = function(i){var self = TMP_10.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10));
      dice_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      max_num = 0;
      $send(dice_aRR, 'each', [], (TMP_11 = function(dice_n){var self = TMP_11.$$s || this, $writer = nil;
if (dice_n == null) dice_n = nil;
      
        
        $writer = [$rb_minus(dice_n, 1), $rb_plus(dice_num['$[]']($rb_minus(dice_n, 1)), 1)];
        $send(dice_num, '[]=', Opal.to_a($writer));
        $writer[$rb_minus($writer["length"], 1)];;
        if ($truthy($rb_gt(dice_n, max_num))) {
          return (max_num = dice_n)
          } else {
          return nil
        };}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11));
      if ($truthy($rb_ge(dice_aRR.$length(), 2))) {
        
        $send((10), 'times', [], (TMP_12 = function(i){var self = TMP_12.$$s || this, dice_now = nil;
if (i == null) i = nil;
        if ($truthy($rb_gt(dice_num['$[]'](i), 1))) {
            
            dice_now = $rb_times(dice_num['$[]'](i), $rb_plus(i, 1));
            if ($truthy($rb_gt(dice_now, max_num))) {
              return (max_num = dice_now)
              } else {
              return nil
            };
            } else {
            return nil
          }}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12));
        if ($truthy($rb_ge(dice_aRR.$length(), 3))) {
          (function(){var $brk = Opal.new_brk(); try {return $send((10), 'times', [], (TMP_13 = function(i){var self = TMP_13.$$s || this, $a, TMP_14, dice_now = nil;
if (i == null) i = nil;
          
            if ($truthy(dice_num['$[]']($rb_plus(i, 2))['$nil?']())) {
              
              Opal.brk(nil, $brk)};
            if ($truthy($rb_gt(dice_num['$[]'](i), 0))) {
              } else {
              return nil;
            };
            if ($truthy(($truthy($a = $rb_gt(dice_num['$[]']($rb_plus(i, 1)), 0)) ? $rb_gt(dice_num['$[]']($rb_plus(i, 2)), 0) : $a))) {
              } else {
              return nil;
            };
            dice_now = $rb_plus($rb_times(i, 3), 6);
            (function(){var $brk = Opal.new_brk(); try {return $send(Opal.Range.$new($rb_plus(i, 3),10, true), 'step', [], (TMP_14 = function(i2){var self = TMP_14.$$s || this;
if (i2 == null) i2 = nil;
            
              if (dice_num['$[]'](i2)['$=='](0)) {
                
                Opal.brk(nil, $brk)};
              return (dice_now = $rb_plus(dice_now, $rb_plus(i2, 1)));}, TMP_14.$$s = self, TMP_14.$$brk = $brk, TMP_14.$$arity = 1, TMP_14))
            } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
            if ($truthy($rb_gt(dice_now, max_num))) {
              return (max_num = dice_now)
              } else {
              return nil
            };}, TMP_13.$$s = self, TMP_13.$$brk = $brk, TMP_13.$$arity = 1, TMP_13))
          } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})()};};
      return max_num;
    }, TMP_CthulhuTech_cthulhutech_check_15.$$arity = 1), nil) && 'cthulhutech_check';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
