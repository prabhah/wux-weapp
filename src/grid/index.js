import baseComponent from '../helpers/baseComponent'
import classNames from '../helpers/classNames'

baseComponent({
    relations: {
        '../grids/index': {
            type: 'parent',
        },
    },
    properties: {
        mpclick: {
            type: String,
            value: ''
        },
        prefixCls: {
            type: String,
            value: 'wux-grid',
        },
        hoverClass: {
            type: String,
            value: 'default',
        },
        thumb: {
            type: String,
            value: '',
        },
        label: {
            type: String,
            value: '',
        },
    },
    data: {
        width: '100%',
        bordered: true,
        square: true,
        index: 0,
    },
    computed: {
        classes() {
            const { prefixCls, hoverClass, bordered, square } = this.data
            const wrap = classNames(prefixCls, {
                [`${prefixCls}--bordered`]: bordered,
                [`${prefixCls}--square`]: square,
            })
            const content = `${prefixCls}__content`
            const inner = `${prefixCls}__inner`
            const hd = `${prefixCls}__hd`
            const thumb = `${prefixCls}__thumb`
            const bd = `${prefixCls}__bd`
            const label = `${prefixCls}__label`
            const hover = hoverClass && hoverClass !== 'default' ? hoverClass : `${prefixCls}--hover`

            return {
                wrap,
                content,
                inner,
                hd,
                thumb,
                bd,
                label,
                hover,
            }
        },
    },
    methods: {
        changeCurrent(width, bordered, square, index) {
            this.setData({
                width,
                bordered,
                square,
                index,
            })
        },
        onTap() {
            this.triggerEvent(this.data.mpclick + 'click', this.data)
        },
    },
})
