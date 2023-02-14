/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */
	//first try did work, too many call stack
	sumValues() {
		if (!this.root) return 0;
		let sum = this.root.val;

		function sumHelper(node) {
			node.children.forEach((child) => {
				sum += child.val;
				if (child.children.length > 0) {
					sumHelper(child);
				}
			});
		}
		sumHelper(this.root);

		return sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return 0;
		let even = 0;

		function evenHelper(node) {
			node.children.forEach((child) => {
				if (child.children % 2 === 0) {
					even += 1;
				}
				if (child.children.length > 0) {
					evenHelper(child);
				}
			});
		}
		evenHelper(this.root);
		return even;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		if (!this.root) return 0;
		let greaterThanBound = this.root.val > lowerBound ? 1 : 0;
		function numGreaterHelper(node) {
			node.children.forEach((child) => {
				if (child.val > lowerBound) {
					greaterThanBound += 1;
				}
				if (child.children.length > 0) {
					numGreaterHelper(child);
				}
			});
		}
		numGreaterHelper(this.root);
		return greaterThanBound;
	}
}

module.exports = { Tree, TreeNode };
