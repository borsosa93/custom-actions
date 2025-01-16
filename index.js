import * as core from '@actions/core';
import * as core from '@actions/github';

try{
    const name = core.getInput('name');
    const outputVal=`Hello ${name}!`;
    core.setOutput('greeting', 'outputVal');
} catch(error){
    core.setFailed(error.message);
}

