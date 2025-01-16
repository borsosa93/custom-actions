import * as core from '@actions/core';
import * as github from '@actions/github';

try{
    const name = core.getInput('name');
    const outputVal=`Hello ${name}!`;
    core.setOutput('greeting', 'outputVal');
} catch(error){
    core.setFailed(error.message);
}

