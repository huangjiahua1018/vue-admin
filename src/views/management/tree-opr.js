export const tableOpr = {
  data() {
    return {
      maps: new Map()
    }
  },
  methods: {
    async loadChildren(tree, treeNode, resolve) {
      this.maps.set(tree.id, { tree, treeNode, resolve })
      const listQuery = {
        page: 0,
        size: 200,
        parentId: tree.id
      }
      const resp = await this.getChildren(listQuery)
      resolve(resp.data)
    },
    refreshLoadTree(lazyTreeNodeMap, maps, parentId) {
      if (maps.get(parentId)) {
        const { tree, treeNode, resolve } = maps.get(parentId)
        this.$set(lazyTreeNodeMap, parentId, [])
        if (tree) { // 重新执行父节点加载子级操作
          this.loadChildren(tree, treeNode, resolve)
          if (tree.parentId) { // 若存在爷爷结点，则执行爷爷节点加载子级操作，防止最后一个子节点被删除后父节点不显示删除按钮
            const a = maps.get(tree.parentId)
            this.loadChildren(a.tree, a.treeNode, a.resolve)
          }
        }
      }
    }
  }
}
