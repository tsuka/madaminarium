/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$debug', '$=~', '$+', '$*', '$to_i', '$last_match', '$sub', '$to_s', '$gsub', '$tandt_berserk', '$==', '$getMaxSuccessLevel', '$>=', '$getExperiencePoint', '$-', '$<=', '$>', '$/', '$int?', '$format', '$match', '$[]', '$parren_killer', '$push', '$loop', '$shift', '$roll', '$&', '$sortType', '$collect', '$split', '$times', '$each', '$[]=', '$empty?', '$-@', '$!=', '$<', '$sendMode']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'TunnelsAndTrolls');

    var $nesting = [self].concat($parent_nesting), $TunnelsAndTrolls_initialize$1, $TunnelsAndTrolls_changeText$2, $TunnelsAndTrolls_dice_command_xRn$8, $TunnelsAndTrolls_check_2D6$9, $TunnelsAndTrolls_getMaxSuccessLevel$10, $TunnelsAndTrolls_getDiceRolledAdditionalText$11, $TunnelsAndTrolls_getExperiencePoint$12, $TunnelsAndTrolls_int$ques$13, $TunnelsAndTrolls_tandt_berserk$14;

    
    Opal.const_set($nesting[0], 'ID', "TunnelsAndTrolls");
    Opal.const_set($nesting[0], 'NAME', "トンネルズ＆トロールズ");
    Opal.const_set($nesting[0], 'SORT_KEY', "とんねるすあんととろおるす");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・行為判定　(nD6+x>=nLV)\n" + "失敗、成功、自動失敗の自動判定とゾロ目の振り足し経験値の自動計算を行います。\n" + "SAVEの難易度を「レベル」で表記することが出来ます。\n" + "例えば「2Lv」と書くと「25」に置換されます。\n" + "判定時以外は悪意ダメージを表示します。\n" + "バーサークとハイパーバーサーク用に専用コマンドが使えます。\n" + "例）2D6+1>=1Lv\n" + "　 (2D6+1>=20) ＞ 7[2,5]+1 ＞ 8 ＞ 失敗\n" + "　判定時にはゾロ目を自動で振り足します。\n" + "\n" + "・バーサークとハイパーバーサーク　(nBS+x or nHBS+x)\n" + "　\"(ダイス数)BS(修正値)\"でバーサーク、\"(ダイス数)HBS(修正値)\"でハイパーバーサークでロールできます。\n" + "　最初のダイスの読替は、個別の出目はそのままで表示。\n" + "　下から２番目の出目をずらした分だけ合計にマイナス修正を追加して表示します。\n");
    self.$setPrefixes(["(\\d+H?BS)"]);
    
    Opal.def(self, '$initialize', $TunnelsAndTrolls_initialize$1 = function $$initialize() {
      var $iter = $TunnelsAndTrolls_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $TunnelsAndTrolls_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $TunnelsAndTrolls_initialize$1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 1;
      return (self.sameDiceRerollCount = 1);
    }, $TunnelsAndTrolls_initialize$1.$$arity = 0);
    
    Opal.def(self, '$changeText', $TunnelsAndTrolls_changeText$2 = function $$changeText(string) {
      var $$3, $$4, $$5, $$6, $$7, self = this, level_diff = nil;

      
      self.$debug("TunnelsAndTrolls parren_killer begin string", string);
      if ($truthy(/(\d+)LV/i['$=~'](string))) {
        
        level_diff = $rb_plus($rb_times($$($nesting, 'Regexp').$last_match(1).$to_i(), 5), 15);
        string = $send(string, 'sub', [/(\d+)LV/i], ($$3 = function(){var self = $$3.$$s || this;

        return level_diff.$to_s()}, $$3.$$s = self, $$3.$$arity = 0, $$3));};
      if ($truthy(/BS/i['$=~'](string))) {
        
        string = $send(string, 'gsub', [/(\d+)HBS([^\d\s][\+\-\d]+)/i], ($$4 = function(){var self = $$4.$$s || this;

        return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R6" + ($$($nesting, 'Regexp').$last_match(2)) + "[H]"}, $$4.$$s = self, $$4.$$arity = 0, $$4));
        string = $send(string, 'gsub', [/(\d+)HBS/i], ($$5 = function(){var self = $$5.$$s || this;

        return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R6[H]"}, $$5.$$s = self, $$5.$$arity = 0, $$5));
        string = $send(string, 'gsub', [/(\d+)BS([^\d\s][\+\-\d]+)/i], ($$6 = function(){var self = $$6.$$s || this;

        return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R6" + ($$($nesting, 'Regexp').$last_match(2))}, $$6.$$s = self, $$6.$$arity = 0, $$6));
        string = $send(string, 'gsub', [/(\d+)BS/i], ($$7 = function(){var self = $$7.$$s || this;

        return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R6"}, $$7.$$s = self, $$7.$$arity = 0, $$7));};
      return string;
    }, $TunnelsAndTrolls_changeText$2.$$arity = 1);
    
    Opal.def(self, '$dice_command_xRn', $TunnelsAndTrolls_dice_command_xRn$8 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$tandt_berserk(string, nick_e)
    }, $TunnelsAndTrolls_dice_command_xRn$8.$$arity = 2);
    
    Opal.def(self, '$check_2D6', $TunnelsAndTrolls_check_2D6$9 = function $$check_2D6(total, dice_total, _dice_list, cmp_op, target) {
      var self = this, experiencePoint = nil;

      
      if (cmp_op['$=='](">=")) {
      } else {
        return ""
      };
      if (dice_total['$=='](3)) {
        return " ＞ 自動失敗"
      } else if (target['$==']("?")) {
        return self.$getMaxSuccessLevel(total, dice_total)
      } else if ($truthy($rb_ge(total, target))) {
        
        experiencePoint = self.$getExperiencePoint(target, dice_total);
        return "" + " ＞ 成功 ＞ 経験値" + (experiencePoint);
      } else {
        return " ＞ 失敗"
      };
    }, $TunnelsAndTrolls_check_2D6$9.$$arity = 5);
    
    Opal.def(self, '$getMaxSuccessLevel', $TunnelsAndTrolls_getMaxSuccessLevel$10 = function $$getMaxSuccessLevel(total_n, dice_n) {
      var $a, self = this, sucLv = nil;

      
      sucLv = 1;
      while ($truthy($rb_ge(total_n, $rb_plus($rb_times(sucLv, 5), 15)))) {
        sucLv = $rb_plus(sucLv, 1)
      };
      sucLv = $rb_minus(sucLv, 1);
      if ($truthy($rb_le(sucLv, 0))) {
        return "" + " ＞ 失敗 ＞ 経験値" + (dice_n)};
      return "" + " ＞ " + (sucLv) + "Lv成功 ＞ 経験値" + (dice_n);
    }, $TunnelsAndTrolls_getMaxSuccessLevel$10.$$arity = 2);
    
    Opal.def(self, '$getDiceRolledAdditionalText', $TunnelsAndTrolls_getDiceRolledAdditionalText$11 = function $$getDiceRolledAdditionalText(n1, n_max, dice_max) {
      var $a, self = this;

      
      self.$debug("getDiceRolledAdditionalText n1, n_max, dice_max", n1, n_max, dice_max);
      if ($truthy(($truthy($a = $rb_gt(n_max, 0)) ? dice_max['$=='](6) : $a))) {
        return "" + " ＞ 悪意" + (n_max)};
      return "";
    }, $TunnelsAndTrolls_getDiceRolledAdditionalText$11.$$arity = 3);
    
    Opal.def(self, '$getExperiencePoint', $TunnelsAndTrolls_getExperiencePoint$12 = function $$getExperiencePoint(diff, dice_n) {
      var self = this, experiencePoint = nil;

      
      self.$debug("diff", diff);
      self.$debug("dice_n", dice_n);
      experiencePoint = $rb_times($rb_divide($rb_times(1.0, $rb_minus(diff, 15)), 5), dice_n);
      if ($truthy(self['$int?'](experiencePoint))) {
        experiencePoint = experiencePoint.$to_i()
      } else {
        experiencePoint = self.$format("%.1f", experiencePoint)
      };
      self.$debug("experiencePoint", experiencePoint);
      return experiencePoint;
    }, $TunnelsAndTrolls_getExperiencePoint$12.$$arity = 2);
    
    Opal.def(self, '$int?', $TunnelsAndTrolls_int$ques$13 = function(v) {
      var self = this;

      return v['$=='](v.$to_i())
    }, $TunnelsAndTrolls_int$ques$13.$$arity = 1);
    return (Opal.def(self, '$tandt_berserk', $TunnelsAndTrolls_tandt_berserk$14 = function $$tandt_berserk(string, nick_e) {
      var $a, $$15, self = this, output = nil, m = nil, dice_c = nil, bonus = nil, isHyperBerserk = nil, dice_arr = nil, dice_now = nil, dice_str = nil, isFirstLoop = nil, n_max = nil, total_n = nil, bonus2 = nil;

      
      self.$debug("tandt_berserk string", string);
      output = "1";
      if ($truthy((m = /(^|\s)S?((\d+)[rR]6([\+\-\d]*)(\[(\w+)\])?)(\s|$)/i.$match(string)))) {
      } else {
        return output
      };
      self.$debug("tandt_berserk matched");
      string = m['$[]'](2);
      dice_c = m['$[]'](3).$to_i();
      bonus = 0;
      if ($truthy(m['$[]'](4))) {
        bonus = self.$parren_killer("" + "(0" + (m['$[]'](4)) + ")").$to_i()};
      isHyperBerserk = false;
      if ($truthy(($truthy($a = m['$[]'](5)) ? m['$[]'](6)['$=~'](/[Hh]/) : $a))) {
        isHyperBerserk = true};
      dice_arr = [];
      dice_now = 0;
      dice_str = "";
      isFirstLoop = true;
      n_max = 0;
      total_n = 0;
      bonus2 = 0;
      self.$debug("isHyperBerserk", isHyperBerserk);
      dice_arr.$push(dice_c);
      (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], ($$15 = function(){var self = $$15.$$s || this, $b, $c, $$16, $$17, $$18, $$19, $$20, dice_wk = nil, rollTotal = nil, rollDiceResultText = nil, roll_cnt1 = nil, rollDiceMaxCount = nil, roll_n_max = nil, roll_cnt_suc = nil, roll_cnt_re = nil, dice_num = nil, diceType = nil, dice_face = nil, min1 = nil, min2 = nil;

      
        self.$debug("loop dice_arr", dice_arr);
        dice_wk = dice_arr.$shift();
        self.$debug("roll dice_wk d6", dice_wk);
        $c = self.$roll(dice_wk, 6, self.$sortType()['$&'](1)), $b = Opal.to_ary($c), (rollTotal = ($b[0] == null ? nil : $b[0])), (rollDiceResultText = ($b[1] == null ? nil : $b[1])), (roll_cnt1 = ($b[2] == null ? nil : $b[2])), (rollDiceMaxCount = ($b[3] == null ? nil : $b[3])), (roll_n_max = ($b[4] == null ? nil : $b[4])), (roll_cnt_suc = ($b[5] == null ? nil : $b[5])), (roll_cnt_re = ($b[6] == null ? nil : $b[6])), $c;
        self.$debug("rollTotal, rollDiceResultText, roll_cnt1, rollDiceMaxCount, roll_n_max, roll_cnt_suc, roll_cnt_re", rollTotal, rollDiceResultText, roll_cnt1, rollDiceMaxCount, roll_n_max, roll_cnt_suc, roll_cnt_re);
        if ($truthy($rb_ge(dice_wk, 2))) {
          
          dice_num = $send(rollDiceResultText.$split(/,/), 'collect', [], ($$16 = function(i){var self = $$16.$$s || this;

          
            
            if (i == null) {
              i = nil;
            };
            return i.$to_i();}, $$16.$$s = self, $$16.$$arity = 1, $$16));
          self.$debug("dice_num", dice_num);
          diceType = 6;
          dice_face = [];
          $send(diceType, 'times', [], ($$17 = function(_i){var self = $$17.$$s || this;

          
            
            if (_i == null) {
              _i = nil;
            };
            return dice_face.$push(0);}, $$17.$$s = self, $$17.$$arity = 1, $$17));
          $send(dice_num, 'each', [], ($$18 = function(dice_o){var self = $$18.$$s || this, $writer = nil;

          
            
            if (dice_o == null) {
              dice_o = nil;
            };
            $writer = [$rb_minus(dice_o, 1), $rb_plus(dice_face['$[]']($rb_minus(dice_o, 1)), 1)];
            $send(dice_face, '[]=', Opal.to_a($writer));
            return $writer[$rb_minus($writer["length"], 1)];}, $$18.$$s = self, $$18.$$arity = 1, $$18));
          $send(dice_face, 'each', [], ($$19 = function(dice_o){var self = $$19.$$s || this;

          
            
            if (dice_o == null) {
              dice_o = nil;
            };
            if ($truthy($rb_ge(dice_o, 2))) {
              
              if ($truthy(isHyperBerserk)) {
                dice_o = $rb_plus(dice_o, 1)};
              return dice_arr.$push(dice_o);
            } else {
              return nil
            };}, $$19.$$s = self, $$19.$$arity = 1, $$19));
          if ($truthy(($truthy($b = isFirstLoop) ? dice_arr['$empty?']() : $b))) {
            
            min1 = 0;
            min2 = 0;
            $send(diceType, 'times', [], ($$20 = function(i){var self = $$20.$$s || this, index = nil;

            
              
              if (i == null) {
                i = nil;
              };
              index = $rb_minus($rb_minus(diceType, i), 1);
              self.$debug("diceType index", index);
              if ($truthy($rb_gt(dice_face['$[]'](index), 0))) {
                
                min2 = min1;
                return (min1 = index);
              } else {
                return nil
              };}, $$20.$$s = self, $$20.$$arity = 1, $$20));
            self.$debug("min1, min2", min1, min2);
            bonus2 = $rb_minus(min2, min1)['$-@']();
            if (min2['$=='](5)) {
              rollDiceMaxCount = $rb_minus(rollDiceMaxCount, 1)};
            if ($truthy(isHyperBerserk)) {
              dice_arr.$push(3)
            } else {
              dice_arr.$push(2)
            };};};
        dice_now = $rb_plus(dice_now, rollTotal);
        if ($truthy(dice_str['$!='](""))) {
          dice_str = $rb_plus(dice_str, "][")};
        dice_str = $rb_plus(dice_str, rollDiceResultText);
        n_max = $rb_plus(n_max, rollDiceMaxCount);
        isFirstLoop = false;
        self.$debug("loop last chek dice_arr", dice_arr);
        if ($truthy(dice_arr['$empty?']())) {
          
          Opal.brk(nil, $brk)
        } else {
          return nil
        };}, $$15.$$s = self, $$15.$$brk = $brk, $$15.$$arity = 0, $$15))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      self.$debug("loop breaked");
      self.$debug("dice_now, bonus, bonus2", dice_now, bonus, bonus2);
      total_n = $rb_plus($rb_plus(dice_now, bonus), bonus2);
      dice_str = "" + "[" + (dice_str) + "]";
      output = "" + (dice_now) + (dice_str);
      if ($truthy($rb_lt(bonus2, 0))) {
        
        self.$debug("bonus2", bonus2);
        output = $rb_plus(output, bonus2.$to_s());};
      self.$debug("bonus", bonus);
      if ($truthy($rb_gt(bonus, 0))) {
        output = $rb_plus(output, "" + "+" + (bonus))
      } else if ($truthy($rb_lt(bonus, 0))) {
        output = $rb_plus(output, bonus.$to_s())};
      if ($truthy($rb_gt(self.$sendMode(), 0))) {
        if ($truthy(output['$=~'](/[^\d\[\]]+/))) {
          output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (output) + " ＞ " + (total_n)
        } else {
          output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (total_n)
        }
      } else {
        output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (total_n)
      };
      if ($truthy($rb_gt(n_max, 0))) {
        output = $rb_plus(output, "" + " ＞ 悪意" + (n_max))};
      return output;
    }, $TunnelsAndTrolls_tandt_berserk$14.$$arity = 2), nil) && 'tandt_berserk';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
