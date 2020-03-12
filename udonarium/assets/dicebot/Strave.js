/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$upcase', '$===', '$to_i', '$last_match', '$checkRoll', '$get_affiliation_table', '$get_identity_table', '$get_affiliation_table2', '$get_identity_table2', '$<', '$>', '$roll', '$collect', '$split', '$size', '$find_all', '$<=', '$!', '$nil?', '$*', '$+', '$get_strave_1d100_table_result', '$floor', '$/', '$-', '$get_table_by_number', '$get_strave_table_result']);
  return (function($base, $super, $parent_nesting) {
    function $Strave(){};
    var self = $Strave = $klass($base, $super, 'Strave', $Strave);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Strave_initialize_1, TMP_Strave_gameName_2, TMP_Strave_gameType_3, TMP_Strave_getHelpMessage_4, TMP_Strave_rollDiceCommand_5, TMP_Strave_checkRoll_8, TMP_Strave_get_affiliation_table_9, TMP_Strave_get_identity_table_10, TMP_Strave_get_affiliation_table2_11, TMP_Strave_get_identity_table2_12, TMP_Strave_get_strave_1d100_table_result_13, TMP_Strave_get_strave_table_result_14;

    def.sortType = nil;
    
    self.$setPrefixes(["MP\\d+", "\\d+ST\\d+(x|\\*)\\d+", "AFF", "IDT", "AFV", "IDV"]);
    
    Opal.defn(self, '$initialize', TMP_Strave_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Strave_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Strave_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Strave_initialize_1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, TMP_Strave_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Strave_gameName_2 = function $$gameName() {
      var self = this;

      return "碧空のストレイヴ"
    }, TMP_Strave_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Strave_gameType_3 = function $$gameType() {
      var self = this;

      return "Strave"
    }, TMP_Strave_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Strave_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・モラトリアムフェイズ用判定：MPm\n" + "・命中判定：nSTm*p\n" + "\n" + "「n」でダイス数を指定。\n" + "「m」で目標値を指定。省略は出来ません。\n" + "「p」で攻撃力を指定。「*」は「x」でも可。\n" + "\n" + "【書式例】\n" + "・MP6 → 目標値6のモラトリアムフェイズ用判定。\n" + "・5ST6*10 → 5d10で目標値6、攻撃力10の命中判定。\n" + "\n" + "【各種表】\n" + "・所属表：AFF　　VN版：AFV\n" + "・アイデンティティ表：IDT　　VN版：IDV\n" + "\n" + "※アイデンティティ表はエラッタ適用済です。\n"
    }, TMP_Strave_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_Strave_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, self = this, output = nil, $case = nil, diceCount = nil, target = nil, damage = nil;

      
      output = (function() {$case = command.$upcase();
      if (/MP(\d+)$/i['$===']($case)) {
      diceCount = 2;
      target = Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$to_i();
      return self.$checkRoll(diceCount, target, nil);}
      else if (/(\d+)ST(\d+)(x|\*)(\d+)$/i['$===']($case)) {
      diceCount = Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$to_i();
      target = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
      damage = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) ? $a : 0).$to_i();
      return self.$checkRoll(diceCount, target, damage);}
      else if ("AFF"['$===']($case)) {return self.$get_affiliation_table()}
      else if ("IDT"['$===']($case)) {return self.$get_identity_table()}
      else if ("AFV"['$===']($case)) {return self.$get_affiliation_table2()}
      else if ("IDV"['$===']($case)) {return self.$get_identity_table2()}
      else { return nil }})();
      return output;
    }, TMP_Strave_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$checkRoll', TMP_Strave_checkRoll_8 = function $$checkRoll(diceCount, target, damage) {
      var $a, $b, TMP_6, TMP_7, self = this, _dice = nil, diceText = nil, diceArray = nil, successCount = nil, isDamage = nil, totalDamage = nil, result = nil;

      
      if ($truthy($rb_lt(target, 1))) {
        target = 1};
      if ($truthy($rb_gt(target, 10))) {
        target = 10};
      $b = self.$roll(diceCount, 10, self.sortType), $a = Opal.to_ary($b), (_dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceArray = $send(diceText.$split(/,/), 'collect', [], (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
      successCount = $send(diceArray, 'find_all', [], (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
      
        return $rb_le(i, target);}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7)).$size();
      isDamage = damage['$nil?']()['$!']();
      if ($truthy(isDamage)) {
        
        totalDamage = $rb_times(successCount, damage);
        result = "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (diceText) + " ＞ Hits：" + (successCount) + "*" + (damage) + " ＞ " + (totalDamage) + "ダメージ";
        } else {
        
        result = "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (diceText);
        if ($truthy($rb_gt(successCount, 0))) {
          result = $rb_plus(result, " ＞ 【成功】")
          } else {
          result = $rb_plus(result, " ＞ 【失敗】")
        };
      };
      return result;
    }, TMP_Strave_checkRoll_8.$$arity = 3);
    
    Opal.defn(self, '$get_affiliation_table', TMP_Strave_get_affiliation_table_9 = function $$get_affiliation_table() {
      var self = this, name = nil, table = nil;

      
      name = "所属表：基本";
      table = [[1, "アリウス管理委員会：あなたはアリウス管理委員会に所属している。"], [2, "オーヴァーブルー：あなたはオーヴァーブルーに所属している。"], [3, "ウォルゲイト：あなたはウォルゲイトに所属している。"], [4, "暁部隊：あなたはかつて、反逆者・暁弥琴と同じ部隊に所属していた。"], [5, "天文部：あなたは天文部に所属している。"], [6, "吹奏楽部：あなたは吹奏楽部に所属している。"], [7, "剣道部：あなたは剣道部に所属している。"], [8, "ボクシング部：あなたはボクシング部に所属している。"], [9, "陸上部：あなたは陸上部に所属している。"], [10, "茶道部：あなたは茶道部に所属している。"], [11, "パソコン部：あなたはパソコン部に所属している。"], [12, "新聞部：あなたは新聞部に所属している。"], [13, "弓道部：あなたは弓道部に所属している。"], [14, "美術部：あなたは美術部に所属している。"], [15, "ミリタリー研究会：あなたはミリタリー研究会に所属している。"], [16, "歴史研究会：あなたは歴史研究会に所属している。"], [17, "ロボット研究会：あなたはロボット研究会に所属している。"], [18, "図書委員会：あなたは図書委員会に所属している。"], [19, "任意：あなたの任意の所属を設定せよ。"], [20, "任意：あなたの任意の所属を設定せよ。"]];
      return self.$get_strave_1d100_table_result(name, table);
    }, TMP_Strave_get_affiliation_table_9.$$arity = 0);
    
    Opal.defn(self, '$get_identity_table', TMP_Strave_get_identity_table_10 = function $$get_identity_table() {
      var self = this, name = nil, table = nil;

      
      name = "アイデンティティ表：基本";
      table = [[1, "戦い：戦いこそが、あなたをあなたたらしめている。"], [2, "守護：あなたには守るべきものがある。"], [3, "復讐：あなたは復讐を誓っている。何かに、あるいは誰かに。"], [4, "名声：その身に浴びる脚光を、何よりも誉としている。"], [5, "恋愛：あなたはその身を焦がす恋に生きている。"], [6, "家族：あなたにとって、家族はかけがえの無いものだ。"], [7, "友人：あなたは友のために戦っている。"], [8, "部隊：共に戦う部隊の仲間が、あなたに力をくれる。"], [9, "ストレイヴ：あなたは自身のストレイヴを誇りに思っている。"], [10, "スフィアブレイク：あなたはスフィアブレイクを熱烈に目指している。"], [11, "お金：あなたはお金を求めている。報酬こそが自分の価値だ。"], [12, "夢：あなたには夢がある。自分を突き動かす夢が。"], [13, "忠誠：あなたは忠誠を誓っている。何かに、あるいは誰かに。"], [14, "共生：あなたは、ヴァイエルと人類との共生を望んでいる。"], [15, "居場所：自身の居場所こそが、あなたに力をくれる。"], [16, "強制：あなたは不本意ながら今の立場にいる。"], [17, "碧空：見上げた青空が、あなたを変えた。"], [18, "任意：あなたの任意のアイデンティティを設定せよ。"], [19, "任意：あなたの任意のアイデンティティを設定せよ。"], [20, "任意：あなたの任意のアイデンティティを設定せよ。"]];
      return self.$get_strave_1d100_table_result(name, table);
    }, TMP_Strave_get_identity_table_10.$$arity = 0);
    
    Opal.defn(self, '$get_affiliation_table2', TMP_Strave_get_affiliation_table2_11 = function $$get_affiliation_table2() {
      var self = this, name = nil, table = nil;

      
      name = "所属表：ヴァリアンスネイヴァー";
      table = [[1, "シュヴァレ・トワール：あなたはシュヴァレ・トワールに所属している。"], [2, "ディープシンカー：あなたはディープシンカーに所属している。"], [3, "ヴェルクシュタット：あなたはヴェルクシュタットに所属している。"], [4, "アウスヴァル：あなたはアウスヴァルに所属している。"], [5, "美術科：あなたは美術科に所属している。"], [6, "哲学科：あなたは哲学科に所属している。"], [7, "数学科：あなたは数学科に所属している。"], [8, "地理学科：あなたは地理学科に所属している。"], [9, "工学科：あなたは工学科に所属している。"], [10, "体育学科：あなたは体育学科に所属している。"], [11, "農学科：あなたは農学科に所属している。"], [12, "歴史学科：あなたは歴史学科に所属している。"], [13, "医学科：あなたは医学科に所属している。"], [14, "情報学科：あなたは情報学科に所属している。"], [15, "音楽科：あなたは音楽科に所属している。"], [16, "心理学科：あなたは心理学科に所属している。"], [17, "文学科：あなたは文学科に所属している。"], [18, "任意：あなたの任意の所属を設定すること。"], [19, "任意：あなたの任意の所属を設定すること。"], [20, "任意：あなたの任意の所属を設定すること。"]];
      return self.$get_strave_1d100_table_result(name, table);
    }, TMP_Strave_get_affiliation_table2_11.$$arity = 0);
    
    Opal.defn(self, '$get_identity_table2', TMP_Strave_get_identity_table2_12 = function $$get_identity_table2() {
      var self = this, name = nil, table = nil;

      
      name = "アイデンティティ表：ヴァリアンスネイヴァー";
      table = [[1, "戦い：戦いへの衝動が、あなたをあなたたらしめている。"], [2, "守護：守るべきものの存在が、あなたをあなたたらしめている。"], [3, "復讐：復讐の誓いこそが、あなたをあなたたらしめている。"], [4, "名声：与えられた名誉こそが、あなたをあなたたらしめている。"], [5, "恋愛：愛する者への想いが、あなたをあなたたらしめている。"], [6, "家族：かけがえのない家族が、あなたをあなたたらしめている。"], [7, "友人：友の存在が、あなたをあなたたらしめている。"], [8, "部隊：部隊の戦友こそが、あなたをあなたたらしめている。"], [9, "ストレイヴ：ストレイヴの存在が、あなたの心を保っている。"], [10, "宇宙：やがて来る旅立ちの日まで、あなたはあなたであろうとしている。"], [11, "お金：与えられる報酬のため、あなたはあなたであろうとしている。"], [12, "夢：あなたには、己の心に誓った夢がある。"], [13, "忠誠：その心でもって、誓った忠義がある。"], [14, "共生：あなたは、ヴァイエルと人類との共生を望んでいる。"], [15, "居場所：自身の居場所への思いが、あなたをあなたたらしめている。"], [16, "ヴァイエル：あなたと同じでありながら、あなたと異なる存在。彼らへの思いが、あなたをあなたたらしめている。"], [17, "エコール：自身の生きる場所への思いが、あなたをあなたたらしめている。"], [18, "任意：あなたの任意のアイデンティティを設定せよ。"], [19, "任意：あなたの任意のアイデンティティを設定せよ。"], [20, "任意：あなたの任意のアイデンティティを設定せよ。"]];
      return self.$get_strave_1d100_table_result(name, table);
    }, TMP_Strave_get_identity_table2_12.$$arity = 0);
    
    Opal.defn(self, '$get_strave_1d100_table_result', TMP_Strave_get_strave_1d100_table_result_13 = function $$get_strave_1d100_table_result(name, table) {
      var $a, $b, self = this, dice = nil, dice2 = nil, result = nil;

      
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b;
      dice2 = $rb_plus($rb_divide($rb_minus(dice.$to_i(), 1), 5).$floor(), 1);
      result = self.$get_table_by_number(dice2, table);
      return self.$get_strave_table_result(name, dice, result);
    }, TMP_Strave_get_strave_1d100_table_result_13.$$arity = 2);
    return (Opal.defn(self, '$get_strave_table_result', TMP_Strave_get_strave_table_result_14 = function $$get_strave_table_result(name, dice, result) {
      var self = this;

      return "" + (name) + "(" + (dice) + ") ＞ " + (result)
    }, TMP_Strave_get_strave_table_result_14.$$arity = 3), nil) && 'get_strave_table_result';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);