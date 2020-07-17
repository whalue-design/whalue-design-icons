// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ReconciliationTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ReconciliationTwoTone';

export default {
  name: 'IconReconciliationTwoTone',
  displayName: 'ReconciliationTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ReconciliationTwoToneSvg } },
      children,
    ),
};