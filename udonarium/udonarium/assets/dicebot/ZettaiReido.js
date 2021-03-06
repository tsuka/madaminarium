/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$roll2DR', '$roll2DarkDice', '$getModInfo', '$getDiffInfo', '$+', '$-', '$getSuccessText', '$getDarkPointResult', '$roll', '$collect', '$split', '$changeDiceToDarkDice', '$==', '$parren_killer', '$<', '$to_s', '$>', '$nil?', '$>=']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'ZettaiReido');

    var $nesting = [self].concat($parent_nesting), $ZettaiReido_rollDiceCommand$1, $ZettaiReido_roll2DR$2, $ZettaiReido_roll2DarkDice$3, $ZettaiReido_changeDiceToDarkDice$5, $ZettaiReido_getModInfo$6, $ZettaiReido_getDiffInfo$7, $ZettaiReido_getDarkPointResult$8, $ZettaiReido_getSuccessText$9;

    
    Opal.const_set($nesting[0], 'ID', "ZettaiReido");
    Opal.const_set($nesting[0], 'NAME', "絶対隷奴");
    Opal.const_set($nesting[0], 'SORT_KEY', "せつたいれいと");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定\n" + "m-2DR+n>=x\n" + "m(基本能力),n(修正値),x(目標値)\n" + "DPの取得の有無も表示されます。\n");
    self.$setPrefixes(["\\d+\\-2DR.*"]);
    
    Opal.def(self, '$rollDiceCommand', $ZettaiReido_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var self = this, baseAvility = nil, modText = nil, diffValue = nil;

      
      if ($truthy(/^(\d+)-2DR([\+\-\d]*)(>=(\d+))?$/i['$==='](command))) {
      } else {
        return nil
      };
      baseAvility = $$($nesting, 'Regexp').$last_match(1).$to_i();
      modText = $$($nesting, 'Regexp').$last_match(2);
      diffValue = $$($nesting, 'Regexp').$last_match(4);
      return self.$roll2DR(baseAvility, modText, diffValue);
    }, $ZettaiReido_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$roll2DR', $ZettaiReido_roll2DR$2 = function $$roll2DR(baseAvility, modText, diffValue) {
      var $a, $b, self = this, diceTotal = nil, diceText = nil, darkPoint = nil, mod = nil, diff = nil, diffText = nil, output = nil, total = nil, successText = nil, darkPointText = nil;

      
      $b = self.$roll2DarkDice(), $a = Opal.to_ary($b), (diceTotal = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), (darkPoint = ($a[2] == null ? nil : $a[2])), $b;
      $b = self.$getModInfo(modText), $a = Opal.to_ary($b), (mod = ($a[0] == null ? nil : $a[0])), (modText = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$getDiffInfo(diffValue), $a = Opal.to_ary($b), (diff = ($a[0] == null ? nil : $a[0])), (diffText = ($a[1] == null ? nil : $a[1])), $b;
      output = "";
      output = $rb_plus(output, "" + "(" + (baseAvility) + "-2DR" + (modText) + (diffText) + ")");
      output = $rb_plus(output, "" + " ＞ " + (baseAvility) + "-" + (diceTotal) + "[" + (diceText) + "]" + (modText));
      total = $rb_plus($rb_minus(baseAvility, diceTotal), mod);
      output = $rb_plus(output, "" + " ＞ " + (total));
      successText = self.$getSuccessText(diceTotal, total, diff);
      output = $rb_plus(output, successText);
      darkPointText = self.$getDarkPointResult(total, diff, darkPoint);
      output = $rb_plus(output, darkPointText);
      return output;
    }, $ZettaiReido_roll2DR$2.$$arity = 3);
    
    Opal.def(self, '$roll2DarkDice', $ZettaiReido_roll2DarkDice$3 = function $$roll2DarkDice() {
      var $a, $b, $$4, self = this, _ = nil, dice_str = nil, dice1 = nil, dice2 = nil, darkDice1 = nil, darkPoint1 = nil, darkDice2 = nil, darkPoint2 = nil, darkPoint = nil, darkTotal = nil, darkDiceText = nil;

      
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      $b = $send(dice_str.$split(","), 'collect', [], ($$4 = function(i){var self = $$4.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return i.$to_i();}, $$4.$$s = self, $$4.$$arity = 1, $$4)), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), (dice2 = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$changeDiceToDarkDice(dice1), $a = Opal.to_ary($b), (darkDice1 = ($a[0] == null ? nil : $a[0])), (darkPoint1 = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$changeDiceToDarkDice(dice2), $a = Opal.to_ary($b), (darkDice2 = ($a[0] == null ? nil : $a[0])), (darkPoint2 = ($a[1] == null ? nil : $a[1])), $b;
      darkPoint = $rb_plus(darkPoint1, darkPoint2);
      if (darkPoint['$=='](2)) {
        darkPoint = 4};
      darkTotal = $rb_plus(darkDice1, darkDice2);
      darkDiceText = "" + (darkDice1) + "," + (darkDice2);
      return [darkTotal, darkDiceText, darkPoint];
    }, $ZettaiReido_roll2DarkDice$3.$$arity = 0);
    
    Opal.def(self, '$changeDiceToDarkDice', $ZettaiReido_changeDiceToDarkDice$5 = function $$changeDiceToDarkDice(dice) {
      var self = this, darkPoint = nil, darkDice = nil;

      
      darkPoint = 0;
      darkDice = dice;
      if (dice['$=='](6)) {
        
        darkDice = 0;
        darkPoint = 1;};
      return [darkDice, darkPoint];
    }, $ZettaiReido_changeDiceToDarkDice$5.$$arity = 1);
    
    Opal.def(self, '$getModInfo', $ZettaiReido_getModInfo$6 = function $$getModInfo(modText) {
      var self = this, value = nil, text = nil;

      
      value = self.$parren_killer("" + "(0" + (modText) + ")").$to_i();
      text = "";
      if ($truthy($rb_lt(value, 0))) {
        text = value.$to_s()
      } else if ($truthy($rb_gt(value, 0))) {
        text = $rb_plus("+", value.$to_s())};
      return [value, text];
    }, $ZettaiReido_getModInfo$6.$$arity = 1);
    
    Opal.def(self, '$getDiffInfo', $ZettaiReido_getDiffInfo$7 = function $$getDiffInfo(diffValue) {
      var self = this, diffText = nil;

      
      diffText = "";
      if ($truthy(diffValue['$nil?']())) {
      } else {
        
        diffValue = diffValue.$to_i();
        diffText = "" + ">=" + (diffValue.$to_i());
      };
      return [diffValue, diffText];
    }, $ZettaiReido_getDiffInfo$7.$$arity = 1);
    
    Opal.def(self, '$getDarkPointResult', $ZettaiReido_getDarkPointResult$8 = function $$getDarkPointResult(_total, _diff, darkPoint) {
      var self = this, text = nil;

      
      text = "";
      if ($truthy($rb_gt(darkPoint, 0))) {
        text = "" + " ＞ " + (darkPoint) + "DP"};
      return text;
    }, $ZettaiReido_getDarkPointResult$8.$$arity = 3);
    return (Opal.def(self, '$getSuccessText', $ZettaiReido_getSuccessText$9 = function $$getSuccessText(diceTotal, total, diff) {
      var self = this, successLevel = nil;

      
      if (diceTotal['$=='](0)) {
        return " ＞ クリティカル"};
      if (diceTotal['$=='](10)) {
        return " ＞ ファンブル"};
      if ($truthy(diff['$nil?']())) {
        diff = 0};
      successLevel = $rb_minus(total, diff);
      if ($truthy($rb_ge(successLevel, 0))) {
        return "" + " ＞ " + (successLevel) + " 成功"};
      return " ＞ 失敗";
    }, $ZettaiReido_getSuccessText$9.$$arity = 3), nil) && 'getSuccessText';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
