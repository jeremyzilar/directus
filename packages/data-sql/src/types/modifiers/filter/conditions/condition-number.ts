import type {
	AbstractSqlQueryFnNode,
	AbstractSqlQueryNode,
	AbstractSqlQuerySelectNode,
	ValueNode,
} from '../../../index.js';

/**
 * Filter rows where a numeric column is equal, greater than, less than, etc. other given number.
 */
export interface SqlConditionNumberNode extends AbstractSqlQueryNode {
	type: 'condition-number';

	/* The column in question. Optionally a function can be applied. */
	target: AbstractSqlQuerySelectNode | AbstractSqlQueryFnNode;

	/* The operator valid for a comparison against numbers. */
	operation: 'eq' | 'lt' | 'lte' | 'gt' | 'gte';

	/* The number to compare the column value with. Specifies a reference to the list of parameters. */
	compareTo: ValueNode;
}
