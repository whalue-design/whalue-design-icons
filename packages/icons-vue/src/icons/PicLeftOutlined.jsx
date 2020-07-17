// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PicLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PicLeftOutlined';

export default {
  name: 'IconPicLeftOutlined',
  displayName: 'PicLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PicLeftOutlinedSvg } },
      children,
    ),
};