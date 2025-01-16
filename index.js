import * as core from '@actions/core';

const name = core.getInput('name');
const outputVal=`Hello ${name}!`;
core.setOutput('greeting', 'outputVal');
