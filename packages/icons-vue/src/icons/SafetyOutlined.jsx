// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SafetyOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SafetyOutlined';

export default {
  name: 'IconSafetyOutlined',
  displayName: 'SafetyOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SafetyOutlinedSvg } },
      children,
    ),
};