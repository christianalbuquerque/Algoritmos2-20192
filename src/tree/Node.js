class Node {
    constructor(key) {
        this.parent = null
        this.leftChild = null
        this.rightChild = null
        this.key = key
    }

    isRoot() {
        return this.parent == null
    }

    isLeaf() {
        return !this.leftChild && !this.rightChild
    }

    hasRightChild() {
        return this.rightChild != null
    }

    hasLeftChild() {
        return this.leftChild != null
    }

    hasBothChildren() {
        return this.leftChild && this.rightChild
    }

    isLeftChild() {
        return this.parent && this.parent.leftChild === this 
    }

    isRightChild() {
        return this.parent && this.parent.rightChild === this

    }

    depth() {
        if(this.isRoot()) return 0
        return 1 + this.parent.depth()
    }

    height() {
        if(this.isLeaf()) return 0

        let right = this.height(this.rightChild)
        let left = this.height(this.leftChild)
        return Math.max(left, right) + 1;
    }
}

export default Node