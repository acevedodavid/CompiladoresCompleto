Blockly.Blocks['program_name'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Program name:")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['vars'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("vars");
        this.appendStatementInput("'DECLARATION'")
            .setCheck("var_declaration");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['var_declaration'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["char", "char"]]), "TYPE")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("function")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput()
            .appendField("type")
            .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["float", "float"], ["char", "char"]]), "TYPE");
        this.appendStatementInput("PARAMETERS")
            .setCheck("var")
            .appendField("parameters");
        this.appendStatementInput("VARIABLES")
            .setCheck("vars")
            .appendField("variables");
        this.appendStatementInput("CONTENT")
            .setCheck(null)
            .appendField("content");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['main'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("main");
        this.appendStatementInput("VARIABLES")
            .setCheck("vars")
            .appendField("variables");
        this.appendStatementInput("CONTENT")
            .setCheck(null)
            .appendField("content");
        this.setPreviousStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("return_value")
            .setCheck(null)
            .appendField("return");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['functioncall'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("functionCall")
            .appendField(new Blockly.FieldTextInput("functionName"), "NAME");
        this.appendStatementInput("PARAMETERS")
            .setCheck("var")
            .appendField("parameters");
        this.setOutput(true, null);
        this.setColour(20);
        this.setTooltip("");
    }
};

Blockly.Blocks['functioncall_void'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("functionCall")
            .appendField(new Blockly.FieldTextInput("functionName"), "NAME");
        this.appendStatementInput("PARAMETERS")
            .setCheck(null)
            .appendField("parameters");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['write'] = {
    init: function () {
        this.appendValueInput("to_write")
            .setCheck(null)
            .appendField("write");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read")
            .appendField(new Blockly.FieldTextInput("varName"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['assign'] = {
    init: function () {
        this.appendValueInput("result")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput("varName"), "NAME")
            .appendField("=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['if'] = {
    init: function () {
        this.appendValueInput("condition")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("then")
            .setCheck(null)
            .appendField("then");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['if_else'] = {
    init: function () {
        this.appendValueInput("condition")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("then")
            .setCheck(null)
            .appendField("then");
        this.appendStatementInput("else")
            .setCheck(null)
            .appendField("else");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("for")
            .appendField(new Blockly.FieldTextInput("varName"), "varname")
            .appendField("from")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "from")
            .appendField("to")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "to");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['while'] = {
    init: function () {
        this.appendValueInput("condition")
            .setCheck(null)
            .appendField("while");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['var_call'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("var/constant"), "NAME");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['arithmetic'] = {
    init: function () {
        this.appendValueInput("left_operand")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"]]), "operator");
        this.appendValueInput("right_operand")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['comparison'] = {
    init: function () {
        this.appendValueInput("left_operand")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["<", "<"], [">", ">"], ["==", "=="]]), "OPERATOR");
        this.appendValueInput("right_operand")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['logical_operators'] = {
    init: function () {
        this.appendValueInput("left_operand")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["and", "&"], ["or", "|"]]), "OPERATOR");
        this.appendValueInput("right_operand")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['expression'] = {
  init: function() {
    this.appendValueInput("result")
        .setCheck(null)
        .appendField("expression");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['write_many'] = {
  init: function() {
    this.appendStatementInput("expressions")
        .setCheck(null)
        .appendField("write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
