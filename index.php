<?php


class TextInput
{
    var $realValue = '';
    
    public function add($value){
        if(gettype($value) == 'string'){
            $this->realValue .= $value;
        }
    }
    
    public function getValue(){
        return $this->realValue;
    }
}

class NumericInput extends TextInput
{
    public function add($value){
        if(is_numeric($value)){
            $this->realValue .= $value;
        }
    }
}

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo($input->getValue());