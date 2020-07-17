// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PicRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PicRightOutlined';

export default {
  name: 'IconPicRightOutlined',
  displayName: 'PicRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PicRightOutlinedSvg } },
      children,
    ),
};