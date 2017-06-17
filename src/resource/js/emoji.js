import $ from 'expose-loader?$!jquery';
import Simditor from 'simditor';

const hasProp = {}.hasOwnProperty;
const slice = [].slice;
const extend = (child, parent) => { for (const key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

const EmojiButton = ((superClass) => {
    function NewEmojiButton() {
        const args = arguments.length >= 1 ? slice.call(arguments, 0) : [];
        NewEmojiButton.__super__.constructor.apply(this, args);
        $.merge(this.editor.formatter._allowedAttributes.img, ['data-emoji', 'alt']);
    }

    extend(NewEmojiButton, superClass);

    NewEmojiButton.i18n = {
        'zh-CN': {
            emoji: '表情'
        },
        'en-US': {
            emoji: 'emoji'
        }
    };

    NewEmojiButton.images = ['smile', 'smiley', 'laughing', 'blush', 'heart_eyes', 'smirk', 'flushed', 'grin', 'wink', 'kissing_closed_eyes', 'stuck_out_tongue_winking_eye', 'stuck_out_tongue', 'sleeping', 'worried', 'expressionless', 'sweat_smile', 'cold_sweat', 'joy', 'sob', 'angry', 'mask', 'scream', 'sunglasses', 'heart', 'broken_heart', 'star', 'anger', 'exclamation', 'question', 'zzz', 'thumbsup', 'thumbsdown', 'ok_hand', 'punch', 'v', 'clap', 'muscle', 'pray', 'skull', 'trollface'];

    NewEmojiButton.prototype.name = 'emoji';

    NewEmojiButton.prototype.icon = 'smile-o';

    NewEmojiButton.prototype.menu = true;

    NewEmojiButton.prototype.renderMenu = function renderMenu() {
        const tpl = '<ul class="emoji-list">\n</ul>';
        const opts = $.extend({
            imagePath: 'images/emoji/',
            images: NewEmojiButton.images
        }, this.editor.opts.emoji || {});
        let html = '';
        const dir = opts.imagePath.replace(/\/$/, '') + '/';
        const ref = opts.images;
        for (let i = 0, len = ref.length; i < len; i++) {
            const name = ref[i];
            html += "<li data-name='" + name + "'><img src='" + dir + name + ".png' width='20' height='20' alt='" + name + "' /></li>";
        }
        const $list = $(tpl);
        $list.html(html).appendTo(this.menuWrapper);
        return $list.on('mousedown', 'li', ((_this) => {
            return (e) => {
                _this.wrapper.removeClass('menu-on');
                if (!_this.editor.inputManager.focused) {
                    return;
                }
                const $img = $(e.currentTarget).find('img').clone().attr({
                    'data-emoji': true,
                    'data-non-image': true
                });
                _this.editor.selection.insertNode($img);
                _this.editor.trigger('valuechanged');
                _this.editor.trigger('selectionchanged');
            };
        })(this));
    };

    NewEmojiButton.prototype.status = () => {};

    return NewEmojiButton;
})(Simditor.Button);
Simditor.Toolbar.addButton(EmojiButton);
