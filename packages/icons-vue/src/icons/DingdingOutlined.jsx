// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DingdingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DingdingOutlined';

export default {
  name: 'IconDingdingOutlined',
  displayName: 'DingdingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DingdingOutlinedSvg } },
      children,
    ),
};