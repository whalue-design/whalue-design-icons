// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DingtalkOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DingtalkOutlined';

export default {
  name: 'IconDingtalkOutlined',
  displayName: 'DingtalkOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DingtalkOutlinedSvg } },
      children,
    ),
};