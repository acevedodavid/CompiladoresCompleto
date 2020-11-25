Blockly.JavaScript['program_name'] = function (block) {
    var text_name = block.getFieldValue('NAME');

    var code = 'program ' + text_name + ';<br>';
    return code;
};

Blockly.JavaScript['vars'] = function (block) {
    var statements_declaration = Blockly.JavaScript.statementToCode(block, "'DECLARATION'");

    statements_declaration = statements_declaration.slice(0, -1);
    console.log(statements_declaration);
    var parsed_result = JSON.parse("{" + statements_declaration + "}");
    //console.log(parsed_result);

    var var_list = {
        "int": [],
        "float": [],
        "char": []
    }

    for (var key in parsed_result) {
        var var_type = parsed_result[key];
        //console.log(key);
        //console.log(parsed_result[key]);
        var_list[var_type].push(key);
    }
    //console.log(var_list);

    var code = 'var ';
    var aux = "";
    for (var var_type in var_list) {
        if (var_list[var_type].length != 0) {
            aux = var_type + " \:";
            var i = 0;
            while (i < var_list[var_type].length) {
                aux += " " + var_list[var_type][i] + "\,";
                i++;
            }
            aux = aux.slice(0, -1);
            aux += "\;";
        }
        code += aux;
        aux = "";
    }

    code += "<br> ";
    return code;
};

Blockly.JavaScript['var_declaration'] = function (block) {
    var text_type = block.getFieldValue('TYPE');
    var text_name = block.getFieldValue('NAME');

    //var code = "'" + text_type + "'" + ":" + + "'"text_name + "'" + ",";
    var code = "\"" + text_name + "\"" + "\:" + "\"" + text_type + "\"" + ",";
    return code;
};

Blockly.JavaScript['function'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var dropdown_type = block.getFieldValue('TYPE');
    var statements_parameters = Blockly.JavaScript.statementToCode(block, 'PARAMETERS');
    var statements_variables = Blockly.JavaScript.statementToCode(block, 'VARIABLES');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'CONTENT');


    statements_parameters = statements_parameters.slice(0, -1);
    //console.log(statements_parameters);
    var parsed_result = JSON.parse("{" + statements_parameters + "}");

    var arguments = "";
    for (var key in parsed_result) {
        var var_type = parsed_result[key];
        arguments += key + ", ";
    }
    arguments = arguments.slice(0, -2);

    var code = "module " + dropdown_type + " " + text_name + "(" + arguments + ")" + "<br>" + statements_variables + "{<br>" + statements_content + "}<br>"
    return code;
};

Blockly.JavaScript['main'] = function (block) {
    var statements_variables = Blockly.JavaScript.statementToCode(block, 'VARIABLES');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'CONTENT');


    var code = "main()<br>" + statements_variables + "{<br>" + statements_content + "}<br>"
    return code;
};

Blockly.JavaScript['return'] = function (block) {
    var value_return_value = Blockly.JavaScript.valueToCode(block, 'return_value', Blockly.JavaScript.ORDER_NONE);

    var code = "return(" + value_return_value + ")\;<br>";
    return code;
};

Blockly.JavaScript['functioncall'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_parameters = Blockly.JavaScript.statementToCode(block, 'PARAMETERS');
    statements_parameters = statements_parameters.slice(0, -1);
    console.log(statements_parameters);
    var parsed_result = JSON.parse("{" + statements_parameters + "}");

    var arguments = "";
    for (var key in parsed_result) {
        var var_type = parsed_result[key];
        arguments += key + ", ";
    }
    arguments = arguments.slice(0, -2);
    var code = text_name + "(" + arguments + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['functioncall_void'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_parameters = Blockly.JavaScript.statementToCode(block, 'PARAMETERS');
    statements_parameters = statements_parameters.slice(0, -1);
    //console.log(statements_parameters);
    var parsed_result = JSON.parse("{" + statements_parameters + "}");

    var arguments = "";
    for (var key in parsed_result) {
        var var_type = parsed_result[key];
        arguments += key + ", ";
    }
    arguments = arguments.slice(0, -2);
    var code = text_name + "(" + arguments + ");<br>";
    return code;
};

Blockly.JavaScript['write'] = function (block) {
    var value_to_write = Blockly.JavaScript.valueToCode(block, 'to_write', Blockly.JavaScript.ORDER_NONE);
    var code = "write(" + value_to_write + ")\;<br>";
    return code;
};

Blockly.JavaScript['read'] = function (block) {
    var text_name = block.getFieldValue('NAME');

    var code = "read(" + text_name + ");<br>";
    return code;
};

Blockly.JavaScript['assign'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var value_result = Blockly.JavaScript.valueToCode(block, 'result', Blockly.JavaScript.ORDER_NONE);

    var code = text_name + " = " + value_result + ";<br>";
    return code;
};

Blockly.JavaScript['if'] = function (block) {
    var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    // TODO: Assemble JavaScript into code variable.
    var code = "if (" + value_condition + ") then<br>{<br>" + statements_then + "}<br>";
    return code;
};

Blockly.JavaScript['if_else'] = function (block) {
    var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    var statements_else = Blockly.JavaScript.statementToCode(block, 'else');
    var code = "if (" + value_condition + ") then<br>{<br>" + statements_then + "}<br>else<br>{<br>" + statements_else + "}<br>";
    return code;
};

Blockly.JavaScript['for'] = function (block) {
    var text_varname = block.getFieldValue('varname');
    var number_from = block.getFieldValue('from');
    var number_to = block.getFieldValue('to');
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = "for " + text_varname + " = " + number_from + " to " + number_to + " do<br>{<br>" + statements_do + "}<br>";
    return code;
};

Blockly.JavaScript['while'] = function (block) {
    var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_NONE);
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = "while(" + value_condition + ") do <br>{<br>" + statements_do + "}<br>";
    return code;
};

Blockly.JavaScript['var_call'] = function (block) {
    var text_name = block.getFieldValue('NAME');

    var code = text_name;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['arithmetic'] = function (block) {
    var value_left_operand = Blockly.JavaScript.valueToCode(block, 'left_operand', Blockly.JavaScript.ORDER_NONE);
    var dropdown_operator = block.getFieldValue('operator');
    var value_right_operand = Blockly.JavaScript.valueToCode(block, 'right_operand', Blockly.JavaScript.ORDER_NONE);
    var code = "(" + value_left_operand + " " + dropdown_operator + " " + value_right_operand + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['comparison'] = function (block) {
    var value_left_operand = Blockly.JavaScript.valueToCode(block, 'left_operand', Blockly.JavaScript.ORDER_NONE);
    var dropdown_operator = block.getFieldValue('OPERATOR');
    var value_right_operand = Blockly.JavaScript.valueToCode(block, 'right_operand', Blockly.JavaScript.ORDER_NONE);

    var code = value_left_operand + " " + dropdown_operator + " " + value_right_operand;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logical_operators'] = function (block) {
    var value_left_operand = Blockly.JavaScript.valueToCode(block, 'left_operand', Blockly.JavaScript.ORDER_NONE);
    var dropdown_operator = block.getFieldValue('OPERATOR');
    var value_right_operand = Blockly.JavaScript.valueToCode(block, 'right_operand', Blockly.JavaScript.ORDER_NONE);

    var code = value_left_operand + " " + dropdown_operator + " " + value_right_operand;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['expression'] = function(block) {
  var value_result = Blockly.JavaScript.valueToCode(block, 'result', Blockly.JavaScript.ORDER_NONE);

  var code = "\"" + value_result + "\" : \"dummy\"," ;
  return code;
};

Blockly.JavaScript['write_many'] = function(block) {
  var statements_expressions = Blockly.JavaScript.statementToCode(block, 'expressions');

  statements_expressions = statements_expressions.slice(0,-1);
  var parsed_result = JSON.parse("{" + statements_expressions + "}");

  var arguments = "";
  for (var key in parsed_result) {
      var var_type = parsed_result[key];
      arguments += key + ", ";
  }
  arguments = arguments.slice(0, -2);

  var code = 'write(' + arguments + ');<br>';
  return code;
};
