/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$!=', '$+', '$success_text', '$juuten', '$<=', '$count', '$[]', '$>']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'NjslyrBattle');

    var $nesting = [self].concat($parent_nesting), $NjslyrBattle_check_2D6$1, $NjslyrBattle_success_text$2, $NjslyrBattle_juuten$3;

    
    Opal.const_set($nesting[0], 'ID', "NJSLYRBATTLE");
    Opal.const_set($nesting[0], 'NAME', "NJSLYRBATTLE");
    Opal.const_set($nesting[0], 'SORT_KEY', "にんしやすれいやあはとる");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・カラテロール\n" + "2d6<=(カラテ点)\n" + "例）2d6<=5\n" + "(2D6<=5) ＞ 2[1,1] ＞ 2 ＞ 成功 重点 3 溜まる\n");
    
    Opal.def(self, '$check_2D6', $NjslyrBattle_check_2D6$1 = function $$check_2D6(total, _dice_total, dice_list, cmp_op, target) {
      var self = this;

      
      if (target['$==']("?")) {
        return ""};
      if ($truthy(cmp_op['$!=']("<="))) {
        return ""};
      return $rb_plus(self.$success_text(total, target), self.$juuten(dice_list));
    }, $NjslyrBattle_check_2D6$1.$$arity = 5);
    
    Opal.def(self, '$success_text', $NjslyrBattle_success_text$2 = function $$success_text(total, target) {
      var self = this;

      if ($truthy($rb_le(total, target))) {
        return " ＞ 成功"
      } else {
        return " ＞ 失敗"
      }
    }, $NjslyrBattle_success_text$2.$$arity = 2);
    return (Opal.def(self, '$juuten', $NjslyrBattle_juuten$3 = function $$juuten(dice_list) {
      var self = this, juuten = nil;

      
      juuten = $rb_plus(dice_list.$count(1), dice_list.$count(6));
      if (dice_list['$[]'](0)['$=='](dice_list['$[]'](1))) {
        juuten = $rb_plus(juuten, 1)};
      if ($truthy($rb_gt(juuten, 0))) {
        return "" + " 重点 " + (juuten) + " 溜まる"
      } else {
        return ""
      };
    }, $NjslyrBattle_juuten$3.$$arity = 1), nil) && 'juuten';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
