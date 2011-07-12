$(document).ready( function () {
	test('new linked lists will have zero nodes', function () {
		expect(1);

		var ll = new LinkedList();
		equals(0, ll.getSize());
	});
	test('linked list with one node will have size 1', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		equals(1, ll.getSize());
	});
	test('linked list with one node, getHead() will return only value', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		equals('Value1', ll.getHead().getValue());
	});
	test('linked list with one node, getTail() will return last added value', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		equals('Value1', ll.getTail().getValue());
	});
	test('linked list with 2 nodes size equals 2', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');

		equals(2, ll.getSize());
	});
	test('linked list with 2 nodes, getHead() will return first value added', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');

		equals('Value1', ll.getHead().getValue());
	});
	test('linked list with 2 nodes, getTail() is the last value added', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');

		equals('Value2', ll.getTail().getValue());
	});
	test('linked list with two nodes, getHead() will point to tail', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');

		equals(ll.getHead().getNext().getValue(), ll.getTail().getValue());
	});
	test('linked list with 3 sequence values is consistent', function () {
		expect(3);

		var ll = new LinkedList();
		ll.add(1);
		ll.add(2);
		ll.add(3);

		equals(1, ll.getHead().getValue());
		equals(2, ll.getHead().getNext().getValue());
		equals(3, ll.getHead().getNext().getNext().getValue());
	});
	test('it is possible to add a value after another value', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.insertAfter('Value1', 'Value2');

		equals('Value2', ll.getHead().getNext().getValue());
	});
	test('when adding a value after another value length should be updated', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.insertAfter('Value1', 'Value2');

		equals(2, ll.getSize());
	});
	test('it is possible to add a value before another value', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.insertBefore('Value1', 'Value2');

		equals('Value2', ll.getHead().getValue());
	});
	test('when adding a value before another value length should be updated', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.insertBefore('Value1', 'Value2');

		equals(2, ll.getSize());
	});
	test('it is possible to find a node by value', function () {
		expect(1);

		var node = null,
		ll = new LinkedList();

		ll.add('Value1');
		ll.add('Value2');
		ll.add('Value3');

		node = ll.find('Value3');

		equals('Value3', node.getValue());
	});
	test('it is possible to iterate over a linked list', function () {
		expect(3);

		var iteration = 0,
		ll = new LinkedList();

		ll.add('Value1');
		ll.add('Value2');
		ll.add('Value3');

		for (var n = ll.getHead(); n; n = n.getNext()) {
			if (iteration == 0)
				equals('Value1', n.getValue());
			if (iteration == 1)
				equals('Value2', n.getValue());
			if (iteration == 2)
				equals('Value3', n.getValue());
			iteration++;
		}
	});
	test('it is possible to replace a node by value', function () {
		expect(2);

		var ll = new LinkedList();
		ll.add('Value1');

		ll.replace('Value1', 'Value2');	

		equals(null, ll.find('Value1'));
		notEqual(null, ll.find('Value2'));
	});
	test('it is possible to remove a node by value', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');
		ll.add('Value3');

		ll.remove('Value1');	

		equals(null, ll.find('Value1'));
	});
	test('if all nodes of are removed, length should be 0', function () {
		expect(1);

		var ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');
		ll.add('Value3');

		ll.remove('Value1');
		ll.remove('Value2');
		ll.remove('Value3');

		equals(0, ll.getSize());
	});
	test('node returned by find() is read-only', function () {
		expect(5);

		var node = null,
		ll = new LinkedList();
		ll.add('Value1');
		ll.add('Value2');
		ll.add('Value3');

		node = ll.find('Value3');

		checkReadOnly(node);
	});
	test('Node.getNext() should return a read-only node', function () {
		expect(5);

		var ll = new LinkedList(),
		node = null,
		nextNode = null;

		ll.add('Value1');
		ll.add('Value2');

		node = ll.find('Value1');
		nextNode = node.getNext();

		checkReadOnly(nextNode);
	});
	test('Node.getPrevious() should return a read-only node', function () {
		expect(5);

		var ll = new LinkedList(),
		node = null,
		previousNode = null;

		ll.add('Value1');
		ll.add('Value2');

		node = ll.find('Value2');
		previousNode = node.getPrevious();

		checkReadOnly(previousNode);
	});
	test('LinkedList.getHead() should return a read-only node', function () {
		expect(5);

		var ll = new LinkedList();

		ll.add('Value1');

		checkReadOnly(ll.getHead());
	});
	test('LinkedList.getTail() should return a read-only node', function () {
		expect(5);

		var ll = new LinkedList();

		ll.add('Value1');

		checkReadOnly(ll.getTail());
	});
	test('when comparing same nodes should be equal', function () {
		expect(1);

		var ll = new LinkedList(),
			find1 = null,
			find2 = null;

		ll.add('Value1');
		
		find1 = ll.find('Value1');
		find2 = ll.find('Value1');

		equal(find1, find2, 'nodes are equal');
	});
	
	function checkReadOnly(node) {
		ok(typeof (node.setNext) == 'undefined');
		ok(typeof (node.setPrevious) == 'undefined');
		ok(typeof (node.getNext) == 'function');
		ok(typeof (node.getPrevious) == 'function');
		ok(typeof (node.getValue) == 'function');
	}

});