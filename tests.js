$(document).ready( function () {
    test('new linked lists will have zero nodes', function () {
        expect(1);

        var ll = new LinkedList();

        equal(ll.getSize(), 0);
    });

    test('linked list with one node will have size 1', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');

        equal(ll.getSize(), 1);
    });

    test('linked list with one node, getHead() will return only value', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');

        equal(ll.getHead().getValue(), 'Value1');
    });

    test('linked list with one node, getTail() will return last added value', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');

        equal(ll.getTail().getValue(), 'Value1');
    });

    test('linked list with 2 nodes size equal 2', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.add('Value2');

        equal(ll.getSize(), 2);
    });

    test('linked list with 2 nodes, getHead() will return first value added', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.add('Value2');

        equal(ll.getHead().getValue(), 'Value1');
    });

    test('linked list with 2 nodes, getTail() is the last value added', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.add('Value2');

        equal(ll.getTail().getValue(), 'Value2');
    });

    test('linked list with two nodes, getHead() will point to tail', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.add('Value2');

        equal(ll.getHead().getNext().getValue(), ll.getTail().getValue());
    });

    test('linked list with 3 sequence values is consistent', function () {
        expect(3);

        var ll = new LinkedList();
        ll.add(1);
        ll.add(2);
        ll.add(3);

        equal(ll.getHead().getValue(), 1);
        equal(ll.getHead().getNext().getValue(), 2);
        equal(ll.getHead().getNext().getNext().getValue(), 3);
    });

    test('it is possible to add a value after another value', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.insertAfter('Value1', 'Value2');

        equal(ll.getHead().getNext().getValue(), 'Value2');
    });

    test('when adding a value after another value length should be updated', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.insertAfter('Value1', 'Value2');

        equal(ll.getSize(), 2);
    });

    test('it is possible to add a value before another value', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.insertBefore('Value1', 'Value2');

        equal(ll.getHead().getValue(), 'Value2');
    });

    test('when adding a value before another value length should be updated', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.insertBefore('Value1', 'Value2');

        equal(ll.getSize(), 2);
    });

    test('it is possible to find a node by value', function () {
        expect(1);

        var node = null,
        ll = new LinkedList();

        ll.add('Value1');
        ll.add('Value2');
        ll.add('Value3');

        node = ll.find('Value3');

        equal(node.getValue(), 'Value3');
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
                equal(n.getValue(), 'Value1');
            if (iteration == 1)
                equal(n.getValue(), 'Value2');
            if (iteration == 2)
                equal(n.getValue(), 'Value3');
            iteration++;
        }
    });

    test('it is possible to replace a node by value', function () {
        expect(2);

        var ll = new LinkedList();
        ll.add('Value1');

        ll.replace('Value1', 'Value2');

        equal(ll.find('Value1'), null);
        notEqual(ll.find('Value2'), null);
    });

    test('it is possible to remove a node by value', function () {
        expect(1);

        var ll = new LinkedList();
        ll.add('Value1');
        ll.add('Value2');
        ll.add('Value3');

        ll.remove('Value1');

        equal(ll.find('Value1'), null);
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

        equal(ll.getSize(), 0);
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