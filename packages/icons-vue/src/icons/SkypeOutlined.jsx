// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SkypeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SkypeOutlined';

export default {
  name: 'IconSkypeOutlined',
  displayName: 'SkypeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkypeOutlinedSvg } },
      children,
    ),
};