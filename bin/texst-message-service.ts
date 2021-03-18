#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TexstMessageServiceStack } from '../lib/texst-message-service-stack';

const app = new cdk.App();
new TexstMessageServiceStack(app, 'TexstMessageServiceStack');
