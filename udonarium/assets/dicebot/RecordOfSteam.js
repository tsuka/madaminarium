/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $gvars = Opal.gvars, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$=~', '$to_i', '$last_match', '$>=', '$getDiceRollResult', '$>', '$length', '$getRoundCountText', '$getSuccessText', '$getSpecialText', '$getFumbleText', '$roll', '$debug', '$!=', '$+', '$collect', '$split', '$==', '$uniq', '$<=', '$first', '$*', '$map']);
  return (function($base, $super, $parent_nesting) {
    function $RecordOfSteam(){};
    var self = $RecordOfSteam = $klass($base, $super, 'RecordOfSteam', $RecordOfSteam);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_RecordOfSteam_gameType_1, TMP_RecordOfSteam_gameName_2, TMP_RecordOfSteam_getHelpMessage_3, TMP_RecordOfSteam_rollDiceCommand_4, TMP_RecordOfSteam_getDiceRollResult_7, TMP_RecordOfSteam_getRoundCountText_8, TMP_RecordOfSteam_getSuccessText_9, TMP_RecordOfSteam_getSpecialText_10, TMP_RecordOfSteam_getFumbleText_11;

    
    self.$setPrefixes(["\\d+S\\d+.*"]);
    
    Opal.defn(self, '$gameType', TMP_RecordOfSteam_gameType_1 = function $$gameType() {
      var self = this;

      return "RecordOfSteam"
    }, TMP_RecordOfSteam_gameType_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_RecordOfSteam_gameName_2 = function $$gameName() {
      var self = this;

      return "Record of Steam"
    }, TMP_RecordOfSteam_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_RecordOfSteam_getHelpMessage_3 = function $$getHelpMessage() {
      var self = this;

      return "" + "2S2@1\n" + "RecordOfSteam : (2S2@1) ＞ 1,2,3,4 ＞ 1回転 ＞ 成功数2\n" + "\n" + "4S3@2\n" + "RecordOfSteam : (4S3@2) ＞ 2,1,2,4,4,4,2,3,4,5,6,6 ＞ 4回転 ＞ 成功数5\n"
    }, TMP_RecordOfSteam_getHelpMessage_3.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_RecordOfSteam_rollDiceCommand_4 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, diceCount = nil, targetNumber = nil, criticalValue = nil, specialValue = nil, rollResult = nil, successCount = nil, roundCount = nil, specialCount = nil, fumbleCount = nil, output = nil, roundCountText = nil, successText = nil, specialText = nil, fumbleText = nil, result = nil;
      if ($gvars.SEND_STR_MAX == null) $gvars.SEND_STR_MAX = nil;

      
      if ($truthy(/(\d+)[sS](\d+)(@(\d+))?/i['$=~'](command))) {
        } else {
        return "1"
      };
      diceCount = Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$to_i();
      targetNumber = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
      criticalValue = Opal.const_get_relative($nesting, 'Regexp').$last_match(4);
      criticalValue = ($truthy($a = criticalValue) ? $a : 1);
      criticalValue = criticalValue.$to_i();
      if ($truthy($rb_ge(diceCount, 150))) {
        return "(多分)無限個なので振れません！ ヤメテクダサイ、(プロセスが)死んでしまいますっ"};
      if ($truthy($rb_ge(criticalValue, 3))) {
        return "(多分)無限個なので振れません！ ヤメテクダサイ、(プロセスが)死んでしまいますっ"};
      specialValue = criticalValue;
      $b = self.$getDiceRollResult(diceCount, targetNumber, criticalValue, specialValue), $a = Opal.to_ary($b), (rollResult = ($a[0] == null ? nil : $a[0])), (successCount = ($a[1] == null ? nil : $a[1])), (roundCount = ($a[2] == null ? nil : $a[2])), (specialCount = ($a[3] == null ? nil : $a[3])), (fumbleCount = ($a[4] == null ? nil : $a[4])), $b;
      output = "" + "(" + (command) + ") ＞ " + (rollResult);
      if ($truthy($rb_gt(output.$length(), $gvars.SEND_STR_MAX))) {
        output = "" + "(" + (command) + ") ＞ ..."};
      roundCountText = self.$getRoundCountText(roundCount);
      successText = self.$getSuccessText(successCount);
      specialText = self.$getSpecialText(specialCount);
      fumbleText = self.$getFumbleText(fumbleCount);
      result = "" + (output) + (roundCountText) + (specialText) + (successText) + (fumbleText);
      return result;
    }, TMP_RecordOfSteam_rollDiceCommand_4.$$arity = 1);
    
    Opal.defn(self, '$getDiceRollResult', TMP_RecordOfSteam_getDiceRollResult_7 = function $$getDiceRollResult(diceCount, targetNumber, criticalValue, specialValue) {
      var $a, $b, $c, TMP_5, TMP_6, self = this, successCount = nil, roundCount = nil, rollResult = nil, specialCount = nil, specialFlag = nil, fumbleCount = nil, fumbleFlag = nil, _ = nil, diceListText = nil, diceList = nil;

      
      successCount = 0;
      roundCount = 0;
      rollResult = "";
      specialCount = 0;
      specialFlag = false;
      fumbleCount = 0;
      fumbleFlag = false;
      while ($truthy($rb_gt(diceCount, 0))) {
        
        $c = self.$roll(diceCount, 6), $b = Opal.to_ary($c), (_ = ($b[0] == null ? nil : $b[0])), (diceListText = ($b[1] == null ? nil : $b[1])), $c;
        self.$debug("diceListText", diceListText);
        if ($truthy(rollResult['$!='](""))) {
          rollResult = $rb_plus(rollResult, ",")};
        rollResult = $rb_plus(rollResult, diceListText);
        diceList = $send(diceListText.$split(/,/), 'collect', [], (TMP_5 = function(i){var self = TMP_5.$$s || this;
if (i == null) i = nil;
        return i.$to_i()}, TMP_5.$$s = self, TMP_5.$$arity = 1, TMP_5));
        if ($truthy((($b = diceList.$uniq().$length()['$=='](1)) ? roundCount['$=='](0) : diceList.$uniq().$length()['$=='](1)))) {
          if ($truthy($rb_le(diceList.$uniq().$first(), specialValue))) {
            specialFlag = true
          } else if (diceList.$uniq().$first()['$=='](6)) {
            fumbleFlag = true}};
        self.$debug("diceList", diceList);
        if ($truthy(specialFlag)) {
          
          specialCount = 1;
          successCount = $rb_times(diceCount, 3);
          return [rollResult, successCount, roundCount, specialCount, fumbleCount];
        } else if ($truthy(fumbleFlag)) {
          
          fumbleCount = 1;
          return [rollResult, successCount, roundCount, specialCount, fumbleCount];};
        diceCount = 0;
        $send(diceList, 'map', [], (TMP_6 = function(diceValue){var self = TMP_6.$$s || this;
if (diceValue == null) diceValue = nil;
        
          self.$debug("diceValue", diceValue);
          self.$debug("criticalValue", criticalValue);
          self.$debug("specialValue", specialValue);
          if ($truthy($rb_le(diceValue, criticalValue))) {
            
            diceCount = $rb_plus(diceCount, 2);
            roundCount = $rb_plus(roundCount, 1);};
          if ($truthy($rb_le(diceValue, targetNumber))) {
            return (successCount = $rb_plus(successCount, 1))
            } else {
            return nil
          };}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
      };
      return [rollResult, successCount, roundCount, specialCount, fumbleCount];
    }, TMP_RecordOfSteam_getDiceRollResult_7.$$arity = 4);
    
    Opal.defn(self, '$getRoundCountText', TMP_RecordOfSteam_getRoundCountText_8 = function $$getRoundCountText(roundCount) {
      var self = this;

      
      if ($truthy($rb_le(roundCount, 0))) {
        return ""};
      return "" + " ＞ " + (roundCount) + "回転";
    }, TMP_RecordOfSteam_getRoundCountText_8.$$arity = 1);
    
    Opal.defn(self, '$getSuccessText', TMP_RecordOfSteam_getSuccessText_9 = function $$getSuccessText(successCount) {
      var self = this;

      
      if ($truthy($rb_gt(successCount, 0))) {
        return "" + " ＞ 成功数" + (successCount)};
      return " ＞ 失敗";
    }, TMP_RecordOfSteam_getSuccessText_9.$$arity = 1);
    
    Opal.defn(self, '$getSpecialText', TMP_RecordOfSteam_getSpecialText_10 = function $$getSpecialText(specialCount) {
      var self = this;

      if (specialCount['$=='](1)) {
        return " ＞ スペシャル"
        } else {
        return nil
      }
    }, TMP_RecordOfSteam_getSpecialText_10.$$arity = 1);
    return (Opal.defn(self, '$getFumbleText', TMP_RecordOfSteam_getFumbleText_11 = function $$getFumbleText(fumbleCount) {
      var self = this;

      if (fumbleCount['$=='](1)) {
        return " ＞ ファンブル"
        } else {
        return nil
      }
    }, TMP_RecordOfSteam_getFumbleText_11.$$arity = 1), nil) && 'getFumbleText';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);