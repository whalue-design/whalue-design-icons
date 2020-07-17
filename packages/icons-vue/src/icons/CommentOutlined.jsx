// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CommentOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CommentOutlined';

export default {
  name: 'IconCommentOutlined',
  displayName: 'CommentOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CommentOutlinedSvg } },
      children,
    ),
};