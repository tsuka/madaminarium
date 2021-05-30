/* Generated by Opal 1.0.3 */
Opal.modules["utils/table"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$freeze', '$match', '$raise', '$to_i', '$[]', '$roll', '$-']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Table');

    var $nesting = [self].concat($parent_nesting), $Table_initialize$1, $Table_roll$2;

    self.$$prototype.times = self.$$prototype.sides = self.$$prototype.name = self.$$prototype.items = nil;
    
    
    Opal.def(self, '$initialize', $Table_initialize$1 = function $$initialize(name, type, items) {
      var self = this, m = nil;

      
      self.name = name;
      self.items = items.$freeze();
      m = /(\d+)D(\d+)/i.$match(type);
      if ($truthy(m)) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "Unexpected table type: " + (type))
      };
      self.times = m['$[]'](1).$to_i();
      return (self.sides = m['$[]'](2).$to_i());
    }, $Table_initialize$1.$$arity = 3);
    return (Opal.def(self, '$roll', $Table_roll$2 = function $$roll(bcdice) {
      var $a, $b, self = this, value = nil, index = nil;

      
      $b = bcdice.$roll(self.times, self.sides), $a = Opal.to_ary($b), (value = ($a[0] == null ? nil : $a[0])), $b;
      index = $rb_minus(value, self.times);
      return "" + (self.name) + "(" + (value) + ") ＞ " + (self.items['$[]'](index));
    }, $Table_roll$2.$$arity = 1), nil) && 'roll';
  })($nesting[0], null, $nesting)
};

/* Generated by Opal 1.0.3 */
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
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$require', '$gsub', '$last_match', '$roll_tables', '$nechronica_check', '$==', '$>=', '$count', '$<=', '$>', '$size', '$debug', '$=~', '$to_i', '$parren_killer', '$roll', '$+', '$<', '$to_s', '$map', '$split', '$to_proc', '$map!', '$join', '$check_nD10', '$getHitLocation', '$!=', '$-', '$[]', '$freeze', '$new', '$setPrefixes', '$keys']);
  
  self.$require("utils/table");
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Nechronica');

    var $nesting = [self].concat($parent_nesting), $Nechronica_initialize$1, $Nechronica_changeText$2, $Nechronica_rollDiceCommand$7, $Nechronica_dice_command_xRn$8, $Nechronica_check_nD10$9, $Nechronica_nechronica_check$11, $Nechronica_getHitLocation$13;

    self.$$prototype.nick_e = nil;
    
    Opal.const_set($nesting[0], 'ID', "Nechronica");
    Opal.const_set($nesting[0], 'NAME', "ネクロニカ");
    Opal.const_set($nesting[0], 'SORT_KEY', "ねくろにか");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定　(nNC+m)\n" + "　ダイス数n、修正値mで判定ロールを行います。\n" + "　ダイス数が2以上の時のパーツ破損数も表示します。\n" + "・攻撃判定　(nNA+m)\n" + "　ダイス数n、修正値mで攻撃判定ロールを行います。\n" + "　命中部位とダイス数が2以上の時のパーツ破損数も表示します。\n" + "\n" + "表\n" + "・姉妹への未練表 nm\n" + "・中立者への未練表 nmn\n" + "・敵への未練表 nme\n");
    
    Opal.def(self, '$initialize', $Nechronica_initialize$1 = function $$initialize() {
      var $iter = $Nechronica_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Nechronica_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Nechronica_initialize$1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 3;
      return (self.defaultSuccessTarget = "6");
    }, $Nechronica_initialize$1.$$arity = 0);
    
    Opal.def(self, '$changeText', $Nechronica_changeText$2 = function $$changeText(string) {
      var $$3, $$4, $$5, $$6, self = this;

      
      string = $send(string, 'gsub', [/(\d+)NC(10)?([\+\-][\+\-\d]+)/i], ($$3 = function(){var self = $$3.$$s || this;

      return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R10" + ($$($nesting, 'Regexp').$last_match(3)) + "[0]"}, $$3.$$s = self, $$3.$$arity = 0, $$3));
      string = $send(string, 'gsub', [/(\d+)NC(10)?/i], ($$4 = function(){var self = $$4.$$s || this;

      return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R10[0]"}, $$4.$$s = self, $$4.$$arity = 0, $$4));
      string = $send(string, 'gsub', [/(\d+)NA(10)?([\+\-][\+\-\d]+)/i], ($$5 = function(){var self = $$5.$$s || this;

      return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R10" + ($$($nesting, 'Regexp').$last_match(3)) + "[1]"}, $$5.$$s = self, $$5.$$arity = 0, $$5));
      string = $send(string, 'gsub', [/(\d+)NA(10)?/i], ($$6 = function(){var self = $$6.$$s || this;

      return "" + ($$($nesting, 'Regexp').$last_match(1)) + "R10[1]"}, $$6.$$s = self, $$6.$$arity = 0, $$6));
      return string;
    }, $Nechronica_changeText$2.$$arity = 1);
    
    Opal.def(self, '$rollDiceCommand', $Nechronica_rollDiceCommand$7 = function $$rollDiceCommand(command) {
      var self = this;

      return self.$roll_tables(command, $$($nesting, 'TABLES'))
    }, $Nechronica_rollDiceCommand$7.$$arity = 1);
    
    Opal.def(self, '$dice_command_xRn', $Nechronica_dice_command_xRn$8 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      
      self.nick_e = nick_e;
      return self.$nechronica_check(string);
    }, $Nechronica_dice_command_xRn$8.$$arity = 2);
    
    Opal.def(self, '$check_nD10', $Nechronica_check_nD10$9 = function $$check_nD10(total, _dice_total, dice_list, cmp_op, target) {
      var $$10, self = this;

      
      if (target['$==']("?")) {
        return ""};
      if (cmp_op['$=='](">=")) {
      } else {
        return ""
      };
      if ($truthy($rb_ge(total, 11))) {
        return " ＞ 大成功"
      } else if ($truthy($rb_ge(total, target))) {
        return " ＞ 成功"
      } else if ($send(dice_list, 'count', [], ($$10 = function(i){var self = $$10.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return $rb_le(i, 1);}, $$10.$$s = self, $$10.$$arity = 1, $$10))['$=='](0)) {
        return " ＞ 失敗"
      } else if ($truthy($rb_gt(dice_list.$size(), 1))) {
        return " ＞ 大失敗 ＞ 使用パーツ全損"
      } else {
        return " ＞ 大失敗"
      };
    }, $Nechronica_check_nD10$9.$$arity = 5);
    
    Opal.def(self, '$nechronica_check', $Nechronica_nechronica_check$11 = function $$nechronica_check(string) {
      var $a, $b, $$12, self = this, output = nil, dice_n = nil, battleMode = nil, modText = nil, mod = nil, isBattleMode = nil, diff = nil, total_n = nil, _ = nil, dice_str = nil, _n1 = nil, _cnt_max = nil, n_max = nil, dice = nil, hit_loc = nil;

      
      output = "1";
      self.$debug("nechronica_check string", string);
      if ($truthy(/(^|\s)S?((\d+)[rR]10([\+\-\d]+)?(\[(\d+)\])?)(\s|$)/i['$=~'](string))) {
      } else {
        
        self.$debug("nechronica_check unmuched");
        return output;
      };
      string = $$($nesting, 'Regexp').$last_match(2);
      dice_n = 1;
      if ($truthy($$($nesting, 'Regexp').$last_match(3))) {
        dice_n = $$($nesting, 'Regexp').$last_match(3).$to_i()};
      battleMode = $$($nesting, 'Regexp').$last_match(6).$to_i();
      modText = $$($nesting, 'Regexp').$last_match(4);
      mod = self.$parren_killer("" + "(0" + (modText) + ")").$to_i();
      isBattleMode = battleMode['$=='](1);
      self.$debug("nechronica_check string", string);
      self.$debug("isBattleMode", isBattleMode);
      diff = 6;
      total_n = 0;
      $b = self.$roll(dice_n, 10, 1), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), (_n1 = ($a[2] == null ? nil : $a[2])), (_cnt_max = ($a[3] == null ? nil : $a[3])), (n_max = ($a[4] == null ? nil : $a[4])), $b;
      total_n = $rb_plus(n_max, mod);
      output = "" + (self.nick_e) + ": (" + (string) + ") ＞ [" + (dice_str) + "]";
      if ($truthy($rb_lt(mod, 0))) {
        output = $rb_plus(output, mod.$to_s())
      } else if ($truthy($rb_gt(mod, 0))) {
        output = $rb_plus(output, "" + "+" + (mod))};
      dice = $send(dice_str.$split(","), 'map', [], "to_i".$to_proc());
      $send(dice, 'map!', [], ($$12 = function(i){var self = $$12.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return $rb_plus(i, mod);}, $$12.$$s = self, $$12.$$arity = 1, $$12));
      dice_str = dice.$join(",");
      output = $rb_plus(output, "" + "  ＞ " + (total_n) + "[" + (dice_str) + "]");
      output = $rb_plus(output, self.$check_nD10(total_n, dice_n, dice, ">=", diff));
      if ($truthy(isBattleMode)) {
        
        hit_loc = self.$getHitLocation(total_n);
        if ($truthy(hit_loc['$!=']("1"))) {
          output = $rb_plus(output, "" + " ＞ " + (hit_loc))};};
      return output;
    }, $Nechronica_nechronica_check$11.$$arity = 1);
    
    Opal.def(self, '$getHitLocation', $Nechronica_getHitLocation$13 = function $$getHitLocation(dice) {
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
    }, $Nechronica_getHitLocation$13.$$arity = 1);
    Opal.const_set($nesting[0], 'TABLES', $hash2(["NM", "NMN", "NME"], {"NM": $$($nesting, 'Table').$new("姉妹への未練表", "1D10", ["【嫌悪】[発狂:敵対認識]敵に命中しなかった攻撃は全て、射程内にいるなら嫌悪の対象に命中する。(防御側任意)", "【独占】[発狂:独占衝動]戦闘開始時と終了時に１つずつ、対象はパーツを選んで損傷する。", "【依存】[発狂:幼児退行]最大行動値が減少する(-2)", "【執着】[発狂:追尾監視]戦闘開始時と終了時に1つずつ、対象はあなたへの未練に狂気点を得る。", "【恋心】[発狂:自傷行動]戦闘開始時と終了時に1つずつ、あなたはパーツを選んで損傷する。", "【対抗】[発狂:過剰競争]戦闘開始時と終了時に1つずつ、あなたは任意の未練に狂気点を追加で得る。", "【友情】[発狂:共鳴依存]セッション終了時、対象にあなたよりも多く損傷したパーツがある際、あなたは損傷パーツ数が対象と同じになるまで、パーツを損傷させる。", "【保護】[発狂:常時密着]あなたが対象と別エリアにいるなら「移動以外の効果を持つマニューバ」を宣言できない。「自身と対象」以外を移動マニューバの対象にできない。", "【憧憬】[発狂:贋作妄想]あなたが対象と同エリアにいるなら「移動以外の効果を持つマニューバ」を宣言できない。「自身と対象」以外を移動マニューバの対象にできない。", "【信頼】[発狂:疑心暗鬼]あなた以外の全ての姉妹の最大行動値が減少する(-1)"]), "NMN": $$($nesting, 'Table').$new("中立者への未練表", "1D10", ["【忌避】[発狂:隔絶意識]あなたは未練の対象ないしサヴァントと同じエリアにいる間、「移動以外の効果を持つマニューバ」を宣言できない。また、「自身と未練の対象ないしサヴァント」以外を移動マニューバの対象にできない。", "【嫉妬】[発狂:不協和音]全ての姉妹は行動判定に修正-1を受ける。", "【依存】[発狂:幼児退行]最大行動値が減少する(-2)", "【憐憫】[発狂:過情移入]あなたは「サヴァント」に対する攻撃判定の出目に修正-1を受ける。", "【感謝】[発狂:病的返礼]発狂した際、あなたは任意の基本パーツ2つ（なければ最もレベルの低い強化パーツ1つ）を損傷する。", "【悔恨】[発狂:自業自棄]あなたが失敗した攻撃判定は全て、あなた自身の任意の箇所にダメージを与える。", "【期待】[発狂:希望転結]あなたは狂気点を追加して振り直しを行う際、出目に修正-1を受ける。（この効果は累積する）", "【保護】[発狂:生前回帰]あなたは「レギオン」をマニューバの対象に選べない。", "【尊敬】[発狂:神化崇拝]あなたは「他の姉妹」をマニューバの対象に選べない。", "【信頼】[発狂:疑心暗鬼]あなた以外の全ての姉妹の最大行動値が減少する(-1)"]), "NME": $$($nesting, 'Table').$new("敵への未練表", "1D10", ["【恐怖】[発狂:認識拒否]あなたは、行動判定・狂気判定の出目に修正-1を受ける。", "【隷属】[発狂:造反有理]あなたが失敗した攻撃判定は全て、大失敗として扱う。", "【不安】[発狂:挙動不審]最大行動値が減少する(-2)", "【憐憫】[発狂:感情移入]あなたは「サヴァント」に対する攻撃判定の出目に修正-1を受ける。", "【愛憎】[発狂:凶愛心中]あなたは狂気判定・攻撃判定で大成功するごとに[判定値-10]個の自身のパーツを選び、損傷させる。", "【悔恨】[発狂:自業自棄]あなたが失敗した攻撃判定は全て、あなた自身の任意の箇所にダメージを与える。", "【軽蔑】[発狂:眼中不在]同エリアの手駒があなたに対して行う攻撃判定の出目は修正+1を受ける。", "【憤怒】[発狂:激情暴走]あなたは、攻撃判定・狂気判定の出目に修正-1を受ける。", "【怨念】[発狂:不倶戴天]あなたは逃走判定ができない。あなたが「自身と未練の対象」以外を対象にしたマニューバを使用する際、行動値1点を追加で減らさなくてはいけない。", "【憎悪】[発狂:痕跡破壊]この未練を発狂した際、あなた以外の姉妹から1人選ぶ。その姉妹は任意のパーツを2つ損傷する。"])}).$freeze());
    return self.$setPrefixes($rb_plus(["\\d+NC", "\\d+NA"], $$($nesting, 'TABLES').$keys()));
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting);
})(Opal);
