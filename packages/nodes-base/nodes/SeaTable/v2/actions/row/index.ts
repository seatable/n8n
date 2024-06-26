import * as create from './create';
import * as get from './get';
import * as list from './list';
import * as search from './search';
import * as update from './update';
import * as remove from './remove';
import * as lock from './lock';
import * as unlock from './unlock';
import type { INodeProperties } from 'n8n-workflow';

export { create, get, search, update, remove, lock, unlock, list };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['row'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new row',
				action: 'Create a row',
			},
			{
				name: 'Delete',
				value: 'remove',
				description: 'Delete a row',
				action: 'Delete a row',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get the content of a row',
				action: 'Get a row',
			},
			{
				name: 'Get Many',
				value: 'list',
				description: 'Get many rows from a table or a table view',
				action: 'Get many rows',
			},
			{
				name: 'Lock',
				value: 'lock',
				description: 'Lock a row to prevent further changes',
				action: 'Add a row lock',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search one or multiple rows',
				action: 'Search a row by keyword',
			},
			{
				name: 'Unlock',
				value: 'unlock',
				description: 'Remove the lock from a row',
				action: 'Remove a row lock',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update the content of a row',
				action: 'Update a row',
			},
		],
		default: 'create',
	},
	...create.description,
	...get.description,
	...list.description,
	...search.description,
	...update.description,
	...remove.description,
	...lock.description,
	...unlock.description,
];
