// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BookOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BookOutlined';

export default {
  name: 'IconBookOutlined',
  displayName: 'BookOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BookOutlinedSvg } },
      children,
    ),
};