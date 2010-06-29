module Sass::Script::Functions
  def hex(num)
    assert_type num, :Number
    Sass::Script::String.new(num.value.to_i.to_s(16).rjust(2, '0'))
  end
end
